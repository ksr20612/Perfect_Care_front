const ServerInfo = {
    "auth" : "localhost:8085",
    "api" : "localhost:8086",
}
Object.freeze(ServerInfo);

export const authUrl = ServerInfo.auth;
export const apiUrl = ServerInfo.api;