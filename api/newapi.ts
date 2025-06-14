class NewApiClient {
    private baseURL: string;

    //loads the api url target
    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    //api client request function
    private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {

        const url = `${this.baseURL}${endpoint}`;

        const config: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        };

        try {
            const response = await fetch(url, config);
            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }


    //HTTP VERBS 
    async get(endpoint: string): Promise<string> {
        return this.request<string>(endpoint, { method: 'GET' });
    }

    async post(endpoint: string, entityRepresentation: string): Promise<string> {
        return this.request<string>(endpoint, { method: 'POST', body: entityRepresentation });
    }

    async patch(endpoint: string, entityRepresentation: string): Promise<string> {
        return this.request<string>(endpoint, { method: 'PATCH', body: entityRepresentation });
    }

    async delete(endpoint: string): Promise<string> {
        return this.request<string>(endpoint, { method: 'DELETE' });
    }

}

export {NewApiClient}
