from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Analytics2b:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")
        
    def execute(self):
        con = self.con
        cur= con.cursor()
        query = """  
SELECT  c.division,i.year,  SUM(f.total_price)
FROM ecom_star_schema.fact_table f
JOIN ecom_star_schema.time_dim i on i.time_key = f.time_key
JOIN ecom_star_schema.customer_dim c on c.customer_key = f.customer_key
GROUP BY CUBE(c.Division, i.year, f.total_price)
order by i.year ,SUM(f.total_price) DESC

"""
        cur.execute(query)
        records = cur.fetchall()
        df = pd.DataFrame(list(records), columns = ['Division' ,'Year','Sales'])
        pd_data = df.dropna()
        return pd_data.to_dict(orient='records')

    
if __name__ == '__main__':
    analytics = Analytics2b()
    data = analytics.execute() 
    print(data)   
        
        