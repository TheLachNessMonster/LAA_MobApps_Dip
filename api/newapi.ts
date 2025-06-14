// src/services/api.ts to do

// ref
// https://restfulapi.net/
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://www.webfx.com/web-development/glossary/http-status-codes/
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS

// api configuration



// api client used for any endpoint
class NewApiClient {
    private baseURL: string;

    //loads the api url target
    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    //api client request function
    private async request<T>(
        //parameters
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const url = `${this.baseURL}${endpoint}`;

        const config: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        };

        try {
            //fetch call to configured url - take url (the endpoint being targeted) and config (RequestInit object that defines req type as 
            //json, as well as the target verb)
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

    async post(endpoint: string, entity: string): Promise<string> {
        return this.request<string>(endpoint, { method: 'POST', body: entity });
    }

    async patch(endpoint: string, entity: object): Promise<string> {
        return this.request<string>(endpoint, { method: 'PATCH', body: JSON.stringify(entity) });
    }

    async delete(endpoint: string): Promise<string> {
        return this.request<string>(endpoint, { method: 'DELETE' });
    }
}

export {NewApiClient}
