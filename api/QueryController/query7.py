from DBconnection.dbconf import PostgresConnection
import pandas as pd


class Query7:
    # x = input('Number of days')
    def __init__(self,days):
        self.days  = days
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")
        print(self.days)
        
    def execute(self):
        con = self.con
        cur= con.cursor()
        print(self.days)
        query = '''SELECT i.item_name 
                            FROM ecom_star_schema.fact_table f
                            JOIN ecom_star_schema.item_dim AS i ON i.item_key=f.item_key 
                            JOIN ecom_star_schema.time_dim t ON t.time_key=f.time_key
                            WHERE t.date>(CURRENT_DATE - integer '{}')'''.format(self.days)
        
        select_stmt = query        
        cur.execute(select_stmt)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns = ['Item Name'])
        pd_data = pd_data.dropna()
        return pd_data.to_dict(orient='records')
    
    
if __name__ == '__main__':
    query7 = Query7()
    data = query7.execute() 
    print(data)   
        
        