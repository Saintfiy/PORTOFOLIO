import React, { useState } from 'react';
import { supabase, ContactMessage } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatusMessage('Please enter your name');
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setStatusMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.subject.trim()) {
      setStatusMessage('Please enter a subject');
      return false;
    }
    if (!formData.message.trim()) {
      setStatusMessage('Please enter your message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setIsLoading(true);
    setStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      setStatus('success');
      setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setStatusMessage('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section fade-in" id="contact">
      <h2 className="section-title">Let's Create Together</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3 style={{marginBottom: '30px', color: 'var(--neon-purple)'}}>Get In Touch</h3>
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div>
              <strong>Email</strong><br/>
              almanzilrestu@gmail.com
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div>
              <strong>Phone</strong><br/>
              +62 859 2883 7807
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🌐</div>
            <div>
              <strong>Location</strong><br/>
              Madura, East Java, Indonesia
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">💼</div>
            <div>
              <strong>LinkedIn</strong><br/>
              /in/restualmanzil
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h3 style={{marginBottom: '30px', color: 'var(--neon-purple)'}}>Start a Conversation</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                id="name" 
                name="name" 
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                id="email" 
                name="email" 
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                id="subject" 
                name="subject" 
                type="text"
                value={formData.subject}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Status Message */}
            {status !== 'idle' && (
              <div style={{
                padding: '10px',
                marginBottom: '15px',
                borderRadius: '5px',
                backgroundColor: status === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                color: status === 'success' ? '#22c55e' : '#ef4444',
                border: `1px solid ${status === 'success' ? '#22c55e' : '#ef4444'}`
              }}>
                {statusMessage}
              </div>
            )}

            <button 
              className="submit-btn" 
              type="submit"
              disabled={isLoading}
              style={{
                opacity: isLoading ? 0.6 : 1,
                cursor: isLoading ? 'not-allowed' : 'pointer'
              }}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          
          {/* Comment Section */}
          <CommentSection />
        </div>
      </div>
    </section>
  );
};

// Comment Section Component
const CommentSection = () => {
  const [comments, setComments] = useState<any[]>([]);
  const [formData, setFormData] = useState({ name: '', comment: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  React.useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setIsLoadingComments(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatusMessage('Please enter your name');
      return false;
    }
    if (!formData.comment.trim()) {
      setStatusMessage('Please enter your comment');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setIsLoading(true);
    setStatus('idle');

    try {
      const { error } = await supabase
        .from('comments')
        .insert([formData]);

      if (error) throw error;

      setStatus('success');
      setStatusMessage('Comment posted successfully!');
      setFormData({ name: '', comment: '' });
      
      // Refresh comments
      await fetchComments();
    } catch (error) {
      console.error('Error posting comment:', error);
      setStatus('error');
      setStatusMessage('Failed to post comment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section id="comment-section" style={{marginTop: '50px'}}>
      <h2>Tinggalkan Komentar</h2>
      <form id="commentForm" onSubmit={handleSubmit}>
        <input 
          type="text" 
          id="commentName" 
          name="name"
          placeholder="Nama" 
          value={formData.name}
          onChange={handleInputChange}
          required 
        />
        <textarea 
          id="commentText" 
          name="comment"
          placeholder="Komentar..." 
          value={formData.comment}
          onChange={handleInputChange}
          required
        />
        
        {/* Status Message */}
        {status !== 'idle' && (
          <div style={{
            padding: '10px',
            marginBottom: '15px',
            borderRadius: '5px',
            backgroundColor: status === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
            color: status === 'success' ? '#22c55e' : '#ef4444',
            border: `1px solid ${status === 'success' ? '#22c55e' : '#ef4444'}`
          }}>
            {statusMessage}
          </div>
        )}
        
        <button 
          type="submit"
          disabled={isLoading}
          style={{
            opacity: isLoading ? 0.6 : 1,
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Mengirim...' : 'Kirim'}
        </button>
      </form>

      <div id="commentsContainer">
        <h3 style={{marginTop: '30px', marginBottom: '20px'}}>
          Komentar ({comments.length})
        </h3>
        
        {isLoadingComments ? (
          <div style={{textAlign: 'center', padding: '20px'}}>
            <div style={{
              width: '30px',
              height: '30px',
              border: '3px solid rgba(255,255,255,0.3)',
              borderTop: '3px solid var(--neon-purple)',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto'
            }}></div>
          </div>
        ) : comments.length === 0 ? (
          <div style={{textAlign: 'center', padding: '20px', color: 'var(--text-secondary)'}}>
            Belum ada komentar. Jadilah yang pertama!
          </div>
        ) : (
          <div>
            {comments.map((comment) => (
              <div 
                key={comment.id}
                style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  padding: '15px',
                  marginBottom: '15px'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, var(--neon-purple), var(--neon-blue))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px'
                  }}>
                    👤
                  </div>
                  <div>
                    <div style={{fontWeight: 'bold', color: 'white'}}>{comment.name}</div>
                    <div style={{fontSize: '0.8em', color: 'var(--text-secondary)'}}>
                      {formatDate(comment.created_at)}
                    </div>
                  </div>
                </div>
                <p style={{color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0}}>
                  {comment.comment}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;