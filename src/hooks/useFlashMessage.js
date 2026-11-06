import { useState } from 'react';

export function useFlashMessage(duration = 3500) {
    const [message, setMessage] = useState('');

    function showMessage(text) {
        setMessage(text);
        setTimeout(() => setMessage(''), duration);
    }

    function clearMessage() {
        setMessage('');
    }

    return { message, showMessage, clearMessage };
}
