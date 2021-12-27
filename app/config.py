import psycopg2

class Config:
    def get_db_connection(self):
        #db configuration
        postgres_url = 'postgresql://postgres@localhost/food_catalogue'
        connection = psycopg2.connect(postgres_url)
        return connection