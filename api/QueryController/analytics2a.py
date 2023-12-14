from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Analytics2a:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")
        
    def execute(self):
        con = self.con
        cur= con.cursor()
        query = """  
SELECT  c.name,i.month,  MAX(f.total_price)
FROM ecom_star_schema.fact_table f
JOIN ecom_star_schema.time_dim i on i.time_key = f.time_key
JOIN ecom_star_schema.customer_dim c on c.customer_key = f.customer_key
GROUP BY CUBE(c.name, i.month)
order by i.month ,SUM(f.total_price) DESC

"""
        cur.execute(query)
        records = cur.fetchall()
        df = pd.DataFrame(list(records), columns = ['Customer' ,'Month','Sales'])
        pd_data = df.dropna()
        return pd_data.to_dict(orient='records')

    
if __name__ == '__main__':
    analytics = Analytics2a()
    data = analytics.execute() 
    print(data)   
        
        