from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Analytics1b:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")
        
    def execute(self):
        con = self.con
        cur= con.cursor()
        query = """  
SELECT  c.store_key,i.month,  SUM(f.total_price)
FROM ecom_star_schema.fact_table f
JOIN ecom_star_schema.time_dim i on i.time_key = f.time_key
JOIN ecom_star_schema.store_dim c on c.store_key = f.store_key
GROUP BY CUBE(c.store_key, i.month, f.total_price)
order by i.month, c.store_key, SUM(f.total_price) DESC

"""
        cur.execute(query)
        records = cur.fetchall()
        df = pd.DataFrame(list(records), columns = ['Store' ,'Month','Sales'])
        pd_data = df.dropna()
        return pd_data.to_dict(orient='records')

    
if __name__ == '__main__':
    analytics1b = Analytics1b()
    data = analytics1b.execute() 
    print(data)   
        
        