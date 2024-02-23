FROM python:3

ENV PYTHONUNBUFFERED 1
RUN mkdir /main
WORKDIR /main
COPY . /main/
COPY manage.py .
#COPY . . 
RUN pip install -r requirements.txt
#RUN python manage migration 
