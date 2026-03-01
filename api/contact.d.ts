type VercelRequest = {
    method?: string;
    body?: {
        name?: string;
        email?: string;
        message?: string;
    };
};
type VercelResponse = {
    status: (code: number) => VercelResponse;
    json: (payload: Record<string, unknown>) => void;
};
export default function handler(req: VercelRequest, res: VercelResponse): Promise<void>;
export {};
