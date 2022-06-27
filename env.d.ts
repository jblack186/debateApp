declare module 'dotenv' {
    export interface DotEnv {
        API_URL
    }
    export const Config: DotEnv
    export default Config
}
