const ServerInfo = {
    "auth" : "http://localhost:8082",
    "api" : "http://localhost:8086",
}
Object.freeze(ServerInfo);

export const authUrl = ServerInfo.auth;
export const apiUrl = ServerInfo.api;