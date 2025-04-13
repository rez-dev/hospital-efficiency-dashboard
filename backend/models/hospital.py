from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Hospital(Base):
    __tablename__ = "hospitales"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    camas = Column(Integer)
    gasto_personal = Column(Float)
    egresos = Column(Integer)