from DBconnection.dbconf import PostgresConnection
import pandas as pd

class Query3:
    def __init__(self):
        self.con = PostgresConnection().getConnection()
        print("Constructor Called")
        
    def execute(self):
        con = self.con
        cur= con.cursor()
        query =  """  
                SELECT s.division, SUM(t.total_price)
                FROM ecom_star_schema.fact_table t
                 JOIN ecom_star_schema.store_dim s on s.store_key = t.store_key
                where s.division = 'Barishal'
                GROUP BY CUBE(s.division)
                order by s.division

                 """    
        cur.execute(query)
        result = cur.fetchall()
        pd_data = pd.DataFrame(list(result), columns = ['Barishal', 'sales'])
        pd_data['sales'] = pd_data['sales'].astype('float64')
        pd_data = pd_data.dropna()
        return pd_data.to_dict(orient='records')
    
    
if __name__ == '__main__':
    query3 = Query3()
    data = query3.execute() 
    print(data)   
        
        