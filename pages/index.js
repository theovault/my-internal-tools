import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  const signatureHTML = `
    <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
      <strong>${name}</strong><br/>
      ${title}<br/>
      ${phone}<br/>
      <a href="mailto:${email}">${email}</a>
    </div>
  `;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(signatureHTML);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ maxWidth: 500, margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h1>Email Signature Generator</h1>
      <input placeholder="Full name" value={name} onChange={e => setName(e.target.value)} style={{ display: 'block', marginBottom: 10, padding: 8, width: '100%' }} />
      <input placeholder="Job title" value={title} onChange={e => setTitle(e.target.value)} style={{ display: 'block', marginBottom: 10, padding: 8, width: '100%' }} />
      <input placeholder="Phone number" value={phone} onChange={e => setPhone(e.target.value)} style={{ display: 'block', marginBottom: 10, padding: 8, width: '100%' }} />
      <input placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} style={{ display: 'block', marginBottom: 20, padding: 8, width: '100%' }} />

      <h3>Preview:</h3>
      <div style={{ border: '1px solid #ccc', padding: 15, marginBottom: 15 }} dangerouslySetInnerHTML={{ __html: signatureHTML }} />

      <button onClick={copyToClipboard} style={{ padding: '10px 20px', background: '#000', color: '#fff', border: 'none', borderRadius: 5, cursor: 'pointer' }}>
        {copied ? 'Copied!' : 'Copy Signature HTML'}
      </button>
    </div>
  );
}
