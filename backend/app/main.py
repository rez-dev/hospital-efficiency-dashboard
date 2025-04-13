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

@app.get("/hospitales")
def listar_hospitales():
    db = SessionLocal()
    hospitales = db.query(Hospital).all()
    return [h.__dict__ for h in hospitales]

