# Reverse array in groups
# k= 3 
# arr=[1,2]
# a,b=0,k-1
# i,j=0,0

# while(b<len(arr)):
#     i=a
#     j=b
#     while(i<=j):
#         arr[i],arr[j] = arr[j],arr[i]
#         i+=1
#         j-=1
#     a=b+1
#     b+=k
    
# if( a <len(arr)-1):
        
#     while(a<len(arr)-1):
#         b=len(arr)-1
#         arr[a],arr[b] =arr[b],arr[a]
#         a+=1
# print(arr)    
        
    
    


arr=[1]
s1,s2=0,sum(arr)
for i in range(len(arr)):
    if( s1 == s2-arr[i]):
        print(i+1)
        break
    if(s1 == s2):
        print(i+1)
        break
    s1= s1+arr[i]
    s2= s2-arr[i]
        

