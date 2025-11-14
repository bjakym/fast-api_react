from fastapi import FastAPI
from contextlib import asynccontextmanager
from .router import router as currency_router
from .init import cmc_client
import uvicorn
from fastapi.middleware.cors import CORSMiddleware


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    yield
    # Shutdown
    await cmc_client.close()


app = FastAPI(lifespan=lifespan)

app.include_router(currency_router)

origins = [
    "http://127.0.0.1:5173",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    uvicorn.run(
        "src.main:app", host="0.0.0.0", port=8000, log_level="info", reload=True
    )
