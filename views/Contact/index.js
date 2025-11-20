import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParallax } from 'react-scroll-parallax';
import { useForm, ValidationError } from '@formspree/react';
import Star from '../../components/SVGs/Star';
import GitFork from '../../components/SVGs/GitFork';

const Contact = ({ data: {
    label,
    heading,
    description,
    button,
    handleBuiltByClick,
    designAndBuiltBy,
} }) => {

    const [githubInfo, setGitHubInfo] = useState({
        stars: null,
        forks: null,
    });

    const [state, handleSubmit] = useForm("mdkwvnrn"); // Formspree form ID
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        fetch('https://api.github.com/repos/AnitusA/portfolio')
            .then(response => response.json())
            .then(json => {
                const { stargazers_count, forks_count } = json;
                setGitHubInfo({
                    stars: stargazers_count,
                    forks: forks_count,
                });
            })
            .catch(e => console.error(e));
    }, []);

    const validateForm = () => {
        const errors = {};
        
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            errors.name = 'Name must be at least 2 characters';
        }
        
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }
        
        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
        } else if (formData.subject.trim().length < 5) {
            errors.subject = 'Subject must be at least 5 characters';
        }
        
        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            errors.message = 'Message must be at least 10 characters';
        }
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear specific field error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleFormSubmit = async (e) => {
        // Validate form before submission
        if (!validateForm()) {
            e.preventDefault();
            return;
        }
        
        // Call Formspree handleSubmit
        handleSubmit(e);
    };

    // Reset form after successful submission
    useEffect(() => {
        if (state.succeeded) {
            setTimeout(() => {
                setFormData({ name: '', email: '', subject: '', message: '' });
                setFormErrors({});
            }, 3000);
        }
    }, [state.succeeded]);

    const { ref } = useParallax({
        easing: 'easeIn',
        translateX: [-50, 0]
    });

    return (
        <div className='mk-contact'>
            <div
                ref={ref}
                className='mk-contact-zebra-img'
                style={{
                    backgroundImage: `url(${'/assets/arrow-sample.svg'})`,
                }}>
            </div>
            <div className='mk-contact-box'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8 col-xl-6'>
                            <div className='mk-contact-box-width'>
                                <div className='mk-contact-label'>{label}</div>
                                <div className='mk-contact-title'>{heading}</div>
                                <div className='mk-contact-text'>{description}</div>
                                <div className='mk-form-note'>
                                    <p><strong>Note:</strong> Required fields are marked with an asterisk (*)</p>
                                </div>
                                
                                {/* Contact Form */}
                                <form onSubmit={handleFormSubmit} className='mk-contact-form'>
                                    <div className='mk-form-group'>
                                        <label htmlFor="name" className="mk-form-label">Your Name *</label>
                                        <input
                                            id="name"
                                            type='text'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder='Your Name *'
                                            className={`mk-form-input ${formErrors.name ? 'error' : ''}`}
                                        />
                                        {formErrors.name && <div className='mk-form-error'>{formErrors.name}</div>}
                                    </div>
                                    <div className='mk-form-group'>
                                        <label htmlFor="email" className="mk-form-label">Email Address *</label>
                                        <input
                                            id="email"
                                            type='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder='Your Email *'
                                            className={`mk-form-input ${formErrors.email ? 'error' : ''}`}
                                        />
                                        {formErrors.email && <div className='mk-form-error'>{formErrors.email}</div>}
                                    </div>
                                    <div className='mk-form-group'>
                                        <label htmlFor="subject" className="mk-form-label">Subject *</label>
                                        <input
                                            id="subject"
                                            type='text'
                                            name='subject'
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder='Subject *'
                                            className={`mk-form-input ${formErrors.subject ? 'error' : ''}`}
                                        />
                                        {formErrors.subject && <div className='mk-form-error'>{formErrors.subject}</div>}
                                    </div>
                                    <div className='mk-form-group'>
                                        <label htmlFor="message" className="mk-form-label">Message *</label>
                                        <textarea
                                            id="message"
                                            name='message'
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder='Your Message *'
                                            rows='5'
                                            className={`mk-form-textarea ${formErrors.message ? 'error' : ''}`}
                                        ></textarea>
                                        {formErrors.message && <div className='mk-form-error'>{formErrors.message}</div>}
                                    </div>
                                    
                                    {/* Honeypot field to prevent spam */}
                                    <input
                                        type="text"
                                        name="_gotcha"
                                        style={{ display: 'none' }}
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />
                                    <div className='mk-form-group'>
                                        <button 
                                            type='submit' 
                                            disabled={state.submitting}
                                            className='mk-button mk-form-submit'
                                        >
                                            {state.submitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </div>
                                    
                                    {/* Formspree validation errors */}
                                    <ValidationError 
                                        prefix="Name" 
                                        field="name"
                                        errors={state.errors}
                                        className="mk-form-error"
                                    />
                                    <ValidationError 
                                        prefix="Email" 
                                        field="email"
                                        errors={state.errors}
                                        className="mk-form-error"
                                    />
                                    <ValidationError 
                                        prefix="Subject" 
                                        field="subject"
                                        errors={state.errors}
                                        className="mk-form-error"
                                    />
                                    <ValidationError 
                                        prefix="Message" 
                                        field="message"
                                        errors={state.errors}
                                        className="mk-form-error"
                                    />
                                    
                                    {/* Success message */}
                                    {state.succeeded && (
                                        <div className="mk-form-status success">
                                            <p>🎉 <strong>Message Sent Successfully!</strong></p>
                                            <p>Thanks for reaching out! I'll review your message and get back to you within 24-48 hours.</p>
                                        </div>
                                    )}
                                    
                                    {/* General form errors */}
                                    {state.errors && state.errors.length > 0 && (
                                        <div className="mk-form-status error">
                                            <p>❌ Please fix the errors above and try again.</p>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <div className='mk-contact-footer'>
                        <div onClick={handleBuiltByClick} className='mk-contact-git-section'>
                            <div>{designAndBuiltBy}</div>
                            {!!(githubInfo.stars && githubInfo.forks) && (
                                <div>
                                    <span>
                                        <Star />
                                        <>{' '}{githubInfo.stars.toLocaleString()}</>
                                    </span>
                                    {' '}
                                    <span>
                                        <GitFork />
                                        <>{' '}{githubInfo.forks.toLocaleString()}</>
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Contact.propTypes = {}

export default Contact