from DBconnection.dbconf import PostgresConnection
import pandas as pd

x = input('Number of days')
class Query7:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")
        
    def execute(self):
        con = self.con
        cur= con.cursor()
        query =   """  
                SELECT i.item_name, ti.date, t.trans_type
                FROM ecom_star_schema.fact_table f
                JOIN ecom_star_schema.item_dim i on i.item_key = f.item_key
                JOIN ecom_star_schema.trans_dim t on t.payment_key = f.payment_key
                JOIN ecom_star_schema.time_dim ti on ti.time_key = f.time_key
                WHERE ti.date > (CURRENT_DATE - INTERVAL '"""
        s2 = str(x) + " days') AND t.trans_type = 'card'"
        select_stmt = query + s2        
        cur.execute(select_stmt)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns = ['division','sales'])
        pd_data['sales'] = pd_data['sales'].astype('float64')
        pd_data = pd_data.dropna()
        return pd_data.to_dict(orient='records')
    
    
if __name__ == '__main__':
    query7 = Query7()
    data = query7.execute() 
    print(data)   
        
        