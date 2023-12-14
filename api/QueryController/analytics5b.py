from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Analytics5b:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")
        
    def execute(self):
        con = self.con
        cur= con.cursor()
        query = """  
SELECT c.item_name, c.stock_quantity, i.year
FROM ecom_star_schema.fact_table f
JOIN ecom_star_schema.time_dim i on i.time_key = f.time_key
JOIN ecom_star_schema.item_dim c on c.item_key = f.item_key
WHERE i.year = '2022'
GROUP BY CUBE( c.item_name, c.stock_quantity, i.year )
order by  c.stock_quantity, i.year ASC

"""

        cur.execute(query)
        records = cur.fetchall()
        df = pd.DataFrame(list(records), columns = ['Item' ,'Quantity','Year'])
        pd_data = df.dropna()
        return pd_data.to_dict(orient='records')

    
if __name__ == '__main__':
    analytics = Analytics5b()
    data = analytics.execute() 
    print(data)   
        
        