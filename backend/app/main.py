# backend/app/main.py
from fastapi import FastAPI
from sqlalchemy.orm import Session
from core.database import SessionLocal, engine
from models.hospital import Hospital

app = FastAPI()

# backend/app/main.py
from core.database import engine
from models.hospital import Base

Base.metadata.create_all(bind=engine)

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # ⚠️ Puedes restringirlo a ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/hospitales")
def listar_hospitales():
    db = SessionLocal()
    hospitales = db.query(Hospital).all()
    return [h.__dict__ for h in hospitales]

