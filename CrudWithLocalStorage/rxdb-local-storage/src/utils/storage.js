export const getBusinesses = () => JSON.parse(localStorage.getItem('businesses') || '[]');
export const saveBusinesses = (data) => localStorage.setItem('businesses', JSON.stringify(data));

export const getArticles = () => JSON.parse(localStorage.getItem('articles') || '[]');
export const saveArticles = (data) => localStorage.setItem('articles', JSON.stringify(data));
