const ApiService = {
    async fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`[API Network Error] gagal memuat ${url}:`, error);
            throw error; 
        }
    },
    async getProfile() { return this.fetchData('./data/profile.json'); },
    async getProjects() { return this.fetchData('./data/projects.json'); },
    async getServices() { return this.fetchData('./data/services.json'); },
    
    async submitServiceOrder(payload) {
        return new Promise((resolve) => {
            setTimeout(() => resolve({ status: 200, message: "Sukses", data: payload }), 1500);
        });
    }
};