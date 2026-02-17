import React, { FormEvent, useMemo, useState } from 'react';

type ChatRole = 'system' | 'user' | 'assistant';

type ChatMessage = {
  role: ChatRole;
  content: string;
};

const defaultAssistantMessage: ChatMessage = {
  role: 'assistant',
  content: '안녕하세요! OpenAI-compatible API에 연결된 챗봇입니다. 궁금한 내용을 입력해 보세요.',
};

const App: React.FC = () => {
  const [baseUrl, setBaseUrl] = useState('https://ai.sbtech.co.kr/v1');
  const [apiKey, setApiKey] = useState('');
  const [model, setModel] = useState('gpt-4o-mini');
  const [systemPrompt, setSystemPrompt] = useState('너는 한국어로 친절하게 답변하는 도우미야.');

  const [messages, setMessages] = useState<ChatMessage[]>([defaultAssistantMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSend = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading]);

  const REQUEST_TIMEOUT_MS = 20000;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!canSend) return;

    const userMessage: ChatMessage = { role: 'user', content: input.trim() };
    const historyForApi: ChatMessage[] = messages
      .slice(1)
      .filter((message) => message.role !== 'system')
      .filter((message) => message.content.trim().length > 0);

    const payloadMessages: ChatMessage[] = [
      ...(systemPrompt.trim() ? [{ role: 'system' as const, content: systemPrompt.trim() }] : []),
      ...historyForApi,
      userMessage,
    ];

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch(`${baseUrl.replace(/\/$/, '')}/chat/completions`, {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...(apiKey.trim() ? { Authorization: `Bearer ${apiKey.trim()}` } : {}),
        },
        body: JSON.stringify({
          model,
          messages: payloadMessages,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`요청 실패 (${response.status}): ${text || response.statusText}`);
      }

      const data = await response.json();
      const assistantText = data?.choices?.[0]?.message?.content;

      if (!assistantText || typeof assistantText !== 'string') {
        throw new Error('응답 형식이 올바르지 않습니다. choices[0].message.content 값을 확인하세요.');
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: assistantText }]);
    } catch (requestError) {
      const message =
        requestError instanceof DOMException && requestError.name === 'AbortError'
          ? `요청이 ${REQUEST_TIMEOUT_MS / 1000}초를 초과해 중단되었습니다. Base URL과 네트워크 상태를 확인해주세요.`
          : requestError instanceof Error
            ? requestError.message
            : '알 수 없는 오류가 발생했습니다.';
      setError(message);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '죄송합니다. 응답을 가져오지 못했습니다. 설정값을 확인한 뒤 다시 시도해주세요.',
        },
      ]);
    } finally {
      window.clearTimeout(timeoutId);
      setIsLoading(false);
    }
  };

  return (
    <div className="app-shell">
      <header className="top-bar">
        <h1>OpenAI-compatible 챗봇</h1>
        <p>기본 엔드포인트: <code>https://ai.sbtech.co.kr/v1</code></p>
      </header>

      <main className="main-layout">
        <aside className="config-panel">
          <h2>연결 설정</h2>

          <label>
            Base URL
            <input value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)} placeholder="https://ai.sbtech.co.kr/v1" />
          </label>

          <label>
            API Key (선택)
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
              autoComplete="off"
            />
          </label>

          <label>
            Model
            <input value={model} onChange={(e) => setModel(e.target.value)} placeholder="gpt-4o-mini" />
          </label>

          <label>
            System Prompt
            <textarea
              value={systemPrompt}
              onChange={(e) => setSystemPrompt(e.target.value)}
              placeholder="도우미의 기본 동작을 입력하세요"
              rows={5}
            />
          </label>
        </aside>

        <section className="chat-panel">
          <div className="chat-window">
            {messages.map((message, index) => (
              <article key={`${message.role}-${index}`} className={`bubble ${message.role}`}>
                <span className="role">{message.role === 'user' ? '나' : 'AI'}</span>
                <p>{message.content}</p>
              </article>
            ))}
            {isLoading && <article className="bubble assistant loading">응답 생성 중...</article>}
          </div>

          {error && <p className="error-text">{error}</p>}

          <form className="chat-form" onSubmit={handleSubmit}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="메시지를 입력하고 Enter 또는 전송 버튼을 눌러주세요"
              rows={3}
            />
            <button type="submit" disabled={!canSend}>
              {isLoading ? '전송 중...' : '전송'}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default App;
