/**
 * Service to connect to NodeJS Backend for website configuration and information.
 * Ensure you set VITE_API_URL in your .env file, e.g., VITE_API_URL=http://localhost:5000/api
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Fetch website information (logo, links, title, etc.) from NodeJS backend.
 * @returns {Promise<Object>} The website configuration data
 */
export const getWebsiteInfo = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/website-info`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch website info: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching website info, using fallback data:', error);

        // Fallback data in case the backend is not running yet
        return {
            title: 'ThanhTam Portfolio',
            description: 'A showcase of my projects and skills.',
            logoUrl: '/avatar.png',
            socialLinks: {
                github: 'https://github.com/tam986',
                linkedin: 'https://linkedin.com',
                email: 'hello@example.com'
            },
            heroImage: '/avatar.png',
            resumeUrl: '#'
        };
    }
};

/**
 * Update website information (for Admin panel).
 * @param {Object} updatedData 
 * @returns {Promise<Object>}
 */
export const updateWebsiteInfo = async (updatedData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/website-info`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('token')}` // Uncomment if using auth
            },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            throw new Error(`Failed to update website info: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating website info:', error);
        throw error;
    }
};
