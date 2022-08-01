FROM python:3.9

WORKDIR /app

EXPOSE 5050

COPY Pipfile ./
COPY Pipfile.lock ./

RUN pip install pipenv
RUN pipenv lock --requirements > requirements.txt
# ^^ THIS WILL USE pipenv in order to create a list of all requirements from the
# pipenv file aka "Pipfile"
RUN pip install -r requirements.txt

COPY . ./

CMD ["python", "main.py"]
