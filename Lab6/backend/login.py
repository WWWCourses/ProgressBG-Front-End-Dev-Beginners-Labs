user_name  = get('userName') # Ada
user_pass  = get('password') # 1234

real_pass = select user_pass from USERS where USERS.user_name==user_name

# USERS:
# id| user_name | user_pass |
# 1 | Ada       | 1234

