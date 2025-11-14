from aiohttp import ClientSession


class HttpClient:
    def __init__(self, base_url: str, api_key: str):
        self.base_url = base_url
        self.api_key = api_key
        self._session = None

    async def _get_session(self):
        if self._session is None:
            self._session = ClientSession(
                base_url=self.base_url, headers={"X-CMC_PRO_API_KEY": self.api_key}
            )
        return self._session

    async def close(self):
        if self._session is not None:
            await self._session.close()


class CMCHTTPClient(HttpClient):
    async def get_listings(self):
        session = await self._get_session()
        async with session.get("/v1/cryptocurrency/listings/latest") as response:
            result = await response.json()
            return result["data"]

    async def get_currency_info(self, currency_id: int):
        session = await self._get_session()
        async with session.get(
            url="/v2/cryptocurrency/quotes/latest",
            params={"id": currency_id},
        ) as response:
            result = await response.json()
            return result["data"][str(currency_id)]
