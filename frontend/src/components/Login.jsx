import React, { useState } from 'react';
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, Route, ShieldCheck, Sparkles } from 'lucide-react';

export default function Login({ onEnter }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function submit(event) {
    event.preventDefault();
    setError('');
    const normalizedEmail = email.trim();
    if (!normalizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setError('Enter a valid email address to continue.');
      return;
    }
    if (password.length < 6) {
      setError('Use at least 6 characters for the demo passphrase.');
      return;
    }
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      onEnter({ email: normalizedEmail });
    }, 450);
  }

  return (
    <main className="login-shell">
      <section className="login-story" aria-label="SmartPool introduction">
        <div className="login-brand"><span className="brand-icon"><Route size={24} /></span>smartpool<span className="brand-period">.</span></div>
        <div className="login-story-copy">
          <span className="eyebrow"><Sparkles size={14} /> SMART MOBILITY, TOGETHER</span>
          <h1>Make every mile <span>matter.</span></h1>
          <p>Share the journey, not the extra miles. SmartPool matches corridor riders with fair fares and protected travel time.</p>
          <div className="login-proof"><ShieldCheck size={18} /><span><strong>Built for the Pune–Mumbai corridor</strong><small>Fair fare allocation · ≤ 15% detour protection</small></span></div>
        </div>
        <div className="login-route-art" aria-hidden="true"><span /><span /><span /><b>PUNE</b><i>MUMBAI</i></div>
      </section>
      <section className="login-card-wrap">
        <form className="login-card" onSubmit={submit} noValidate>
          <div className="login-card-heading"><span className="login-lock"><LockKeyhole size={19} /></span><div><p className="eyebrow">WELCOME BACK</p><h2>Enter SmartPool</h2></div></div>
          <p className="login-subtitle">Use the demo entry below to explore the rider, driver, and operations views.</p>
          <div className="demo-label"><span className="status-dot" /> Demo entry · no account is created</div>
          <label className="login-field"><span>Email address</span><div className="input-with-icon"><Mail size={17} /><input type="email" autoComplete="username" placeholder="you@college.edu" value={email} onChange={e => setEmail(e.target.value)} /></div></label>
          <label className="login-field"><span>Demo passphrase</span><div className="input-with-icon"><LockKeyhole size={17} /><input type={showPassword ? 'text' : 'password'} autoComplete="off" placeholder="At least 6 characters" value={password} onChange={e => setPassword(e.target.value)} /><button type="button" className="password-toggle" onClick={() => setShowPassword(value => !value)} aria-label={showPassword ? 'Hide passphrase' : 'Show passphrase'}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></div></label>
          {error && <p className="login-error" role="alert">{error}</p>}
          <button className="primary wide login-submit" type="submit" disabled={loading}>{loading ? 'Opening demo…' : 'Continue to SmartPool'}{!loading && <ArrowRight size={18} />}</button>
          <p className="login-disclaimer">This is a clearly labelled frontend demo entry. It is not secure authentication, does not contact an auth provider, and does not protect backend APIs.</p>
        </form>
        <p className="login-footer">SmartPool · Hackathon demonstration</p>
      </section>
    </main>
  );
}
