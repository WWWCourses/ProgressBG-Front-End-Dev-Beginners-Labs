### request parameters (data):
userName = Pesho,
pass =  123
gender=male



### some PHP code
INSERT into USERS (userName=${userName},password=${pass}, Gender=${gender} )


### DB (MySQL)
TABLE USERS:
-----------------------------
userName | password | Gender |
-----------------------------
|Pesho   | 123      | male   |
|Maria   | 67898c   | female |