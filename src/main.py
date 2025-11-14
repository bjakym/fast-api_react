from fastapi import FastAPI
from contextlib import asynccontextmanager
from .router import router as currency_router
from .init import cmc_client
import uvicorn


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    yield
    # Shutdown
    await cmc_client.close()


app = FastAPI(lifespan=lifespan)

app.include_router(currency_router)

if __name__ == "__main__":
    uvicorn.run(
        "src.main:app", host="127.0.0.1", port=8000, log_level="info", reload=True
    )
