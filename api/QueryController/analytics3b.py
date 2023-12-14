from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Analytics3b:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")
        
    def execute(self):
        con = self.con
        cur= con.cursor()
        query = """  
SELECT  c.item_name,i.year,  SUM(f.total_price)
FROM ecom_star_schema.fact_table f
JOIN ecom_star_schema.time_dim i on i.time_key = f.time_key
JOIN ecom_star_schema.item_dim c on c.item_key = f.item_key
WHERE i.year = '2019'
GROUP BY CUBE(c.item_name, i.year, f.total_price)
order by i.year ,SUM(f.total_price) DESC

"""

        cur.execute(query)
        records = cur.fetchall()
        df = pd.DataFrame(list(records), columns = ['Item' ,'month','Sales'])
        pd_data = df.dropna()
        return pd_data.to_dict(orient='records')

    
if __name__ == '__main__':
    analytics = Analytics3b()
    data = analytics.execute() 
    print(data)   
        
        