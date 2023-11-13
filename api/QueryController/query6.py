from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query6:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")
        
    def execute(self):
        con = self.con
        cur= con.cursor()
        query =  """  
              SELECT s.store_key, i.item_name,  SUM(f.quantity)
                FROM ecom_star_schema.fact_table f
                JOIN ecom_star_schema.item_dim i on i.item_key = f.item_key
                JOIN ecom_star_schema.store_dim s on s.store_key = f.store_key
                GROUP BY CUBE(s.store_key, i.item_name, f.quantity)
                order by s.store_key, SUM(f.quantity) DESC

                 """    
        cur.execute(query)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns = ['Store_key','Item_name' ,'Quantity'])
        pd_data = pd_data.dropna()
        return pd_data.to_dict(orient='records')
    
    
if __name__ == '__main__':
    query6 = Query6()
    data = query5.execute() 
    print(data)   
        
        