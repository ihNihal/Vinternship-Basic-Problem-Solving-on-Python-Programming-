from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Analytics1a:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")
        
    def execute(self):
        con = self.con
        cur= con.cursor()
        query = """  
SELECT  c.store_key,i.quarter,  MAX(f.total_price)
FROM ecom_star_schema.fact_table f
JOIN ecom_star_schema.time_dim i on i.time_key = f.time_key
JOIN ecom_star_schema.store_dim c on c.store_key = f.store_key
WHERE i.quarter = 'Q4'
GROUP BY CUBE(c.store_key, i.quarter, f.total_price)
order by i.quarter, c.store_key, MAX(f.total_price) DESC

"""  
        cur.execute(query)
        records = cur.fetchall()
        df = pd.DataFrame(list(records), columns = ['Store' ,'Quarter','Sales'])
        pd_data = df.dropna()
        return pd_data.to_dict(orient='records')

    
if __name__ == '__main__':
    analytics1a = Analytics1a()
    data = analytics1a.execute() 
    print(data)   
        
        