from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Analytics5a:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")
        
    def execute(self):
        con = self.con
        cur= con.cursor()
        query = """  
SELECT  c.item_name, i.quarter, AVG(f.total_price/f.quantity)
FROM ecom_star_schema.fact_table f
JOIN ecom_star_schema.time_dim i on i.time_key = f.time_key
JOIN ecom_star_schema.item_dim c on c.item_key = f.item_key
GROUP BY CUBE( i.quarter, c.item_name, f.total_price )
order by i.quarter , AVG(f.total_price/f.quantity) DESC

"""

        cur.execute(query)
        records = cur.fetchall()
        df = pd.DataFrame(list(records), columns = ['Item' ,'Quarter','Sales'])
        pd_data = df.dropna()
        return pd_data.to_dict(orient='records')

    
if __name__ == '__main__':
    analytics = Analytics5a()
    data = analytics.execute() 
    print(data)   
        
        