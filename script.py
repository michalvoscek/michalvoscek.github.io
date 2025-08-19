import re
import json

# Raw input data
raw_data = """
D1403	Mix For Flour	1×1000 g	BLV	0,00	19 %
D1402	Mix For Cake	1×1000 g	BLV	0,97	19 %
D1072	Mehl Farine -múčna zmes bezgluténová univerzálna	1×1000 g	SCH	0,92	19 %
D1404	Mix Free Univerzal	1×500 g	BLV	0,52	19 %
D0170	PROMIX®CH, bezgluténová múčna zmes na chlieb	1×1000 g	NVL	1,08	19 %
D0407	PROMIX®PK špeciál, bezgluténová múčna zmes zmes na jemné pečivo	1×1000 g	NVL	1,06	19 %
D0408	PROMIX®CH špeciál, bezgluténová múčna zmes na chlieb	1×1000 g	NVL	1,06	19 %
D1029	Universal mix – bezgluténová univerzálna zmes na múčne jedlá	1×1000 g	LG	1,05	19 %
D0171	PROMIX®PK, bezgluténová múčna zmes na jemné pečivo	1×1000 g	NVL	1,11	19 %
D0386	Bezlepková sypká zmes Mantler bez laktózy	1×1000 g	MTM	1,10	19 %
D1226	Mix it- Univerzal	1×1000 g	SCH	1,29	19 %
D0976	Cake Mix – bezgluténová piškótová zmes	1×1000 g	LG	1,30	19 %
D1154	Pohánková múka hladká bezgluténová zo slovenskej pohánky	1×500 g	MLT	0,67	19 %
D0685	Jizerka – bezlepková zmes “ZELENÁ”	1×1000 g	JIZ	1,40	19 %
D1155	Pohánková krupica bezgluténové zo slovenskej pohánky	1×500 g	MLT	0,68	19 %
D1401	Mix For Bread	1×1000 g	BLV	1,53	19 %
D1280	Rolls mix – bezgluténová múčna zmes na rožky	1x500g	LG	0,79	19 %
D0272	Knedľa bezgluténová v prášku	1×250 g	NVL	0,44	19 %
D0172	PROMIX®UNI, bezgluténová múčna zmes univerzálna	1×1000 g	NVL	1,76	19 %
D1031	Bread mix dark – bezgluténová zmes na tmavý chlieb a pečivo s pohánkou	1×1000 g	LG	1,66	19 %
D0173	PROMIX®T, bezgluténová múčna zmes univerzálna tmavá	1×1000 g	NVL	1,79	19 %
D1030	Bread mix white – bezgluténová zmes na svetlý chlieb a pečivo	1×1000 g	LG	1,65	19 %
D0872	PROMIX ®Alfa, bezgluténová múčna zmes univerzálna mineralizovaná	1×1000 g	NVL	2,00	19 %
D1073	Mix C Patisserie – múčna zmes bezgluténová	1×1000 g	SCH	2,14	19 %
D0873	PROMIX® Beta, racionálna bezgluténová múka mineralizovaná	1×1000 g	NVL	2,20	19 %
D0974	Mix per Pane – zmes na chlieb	1×1000 g	NTF	2,34	19 %
D0194	PROMIX®FORTE, bezgluténová múčna zmes silná	1×1000 g	NVL	2,43	19 %
D0337	PROMIX-UNI komfort – univerzálna bezlepková zmes pre automatické pečeni	1×400 g	NVL	1,08	19 %
D1074	Mix per Pane Integrale – zmes na chlieb, bezgluténová	1×1000 g	NTF	2,46	19 %
D0973	Bakery mix – bezgluténová zmes na kysnuté cesto	1×1000 g	LG	2,42	19 %
D0335	Muffin bezgluténový v prášku	1×300 g	NVL	0,92	19 %
D0298	Mix B – bezlepková zmes na prípravu chleba	1×1000 g	SCH	2,70	19 %
D1104	Halušky bezgluténové v prášku	1×300 g	NVL	0,88	19 %
D0657	Mix it Dunkel – chlebová zmes tmavá	1×1000 g	SCH	3,02	19 %
D0256	Cícerová múka instantná	1×500 g	EXT	1,75	19 %
D0658	Paniermehl – breadcrumbs – strúhanka bez lepku	1×300 g	SCH	1,40	5 %
D0175	KRUPICA bezgluténová	1×500 g	NVL	2,30	19 %
D0254	Strúhanka bezgluténová pečivová	1×350 g	NVL	1,64	5 %
D1318	Pancakes&Waffles – bezgluténová sypká zmes na prípravu vaflí alebo palaci	1×350 g	SCH	2,20	19 %
D0977	Fine Mix – bezgluténová zmes na perníky	1×300 g	LG	2,46	19 %
D0662	Spaghetti – bezlepkové cestoviny	1×250 g	SCH	0,25	19 %
D0663	Penne – bezlepkové cestoviny	1×250 g	SCH	0,25	19 %
D0664	Fusilli – bezlepkové cestoviny	1×250 g	SCH	0,25	19 %
D0340	MUESLI bezlepkové granulované	1×200 g	NVL	0,68	19 %
D0180	PROCEL bezgluténové cestoviny	1×250 g	NVL	0,88	19 %
D0939	Maestro Vital, chlieb bezgluténový viaczrnný obohatený vápnikom krájaný	1×350 g	SCH	1,56	5 %
D0942	Fruit Müsli, müsli s ovocím bezgluténové	1×375 g	SCH	2,36	19 %
D0874	LINSI chlieb s ľanom bezgluténový	1×300 g	NVL	1,28	5 %
D0876	Parená knedľa bezgluténová	1×320 g	NVL	1,36	5 %
D0940	Maestro Classic, chlieb bezgluténový krájaný	1×300 g	SCH	1,55	5 %
D0941	Maestro Cereale, chlieb bezgluténový viaczrnný krájaný	1×300 g	SCH	1,67	5 %
D0185	Svetlý chlieb bezgluténový	1×360 g	NVL	1,80	5 %
D0251	Tmavý chlieb bezgluténový	1×360 g	NVL	1,80	5 %
D0877	Parené buchty bezgluténové s lekvárom	1×320 g	NVL	1,66	5 %
D0978	Panfette- integrale- celozrnný chlieb krájaný	1×340 g	NTF	2,48	5 %
D0661	Ciabatta Rustica – pečivo bežné bezgluténové viaczrnné	1×200 g	SCH	2,01	5 %
D0875	Panini, Hamburger – bezgluténové žemle bez lepku	1×300 g	SCH	2,50	5 %
D0979	Panfette- krájaný chlieb biely	1×300 g	NTF	2,73	5 %
D0293	Bon Matin – bezlepkové sladké žemle	1×200 g	SCH	2,26	5 %
D0479	Pain Campagnard – bezlepkový domáci chlieb	1×240 g	SCH	2,35	5 %
D0660	Ciabatta – predpečené bezlepkové žemle	1×200 g	SCH	2,11	5 %
"""

# Extract each line into structured components
pattern = re.compile(r'^(D\d+)\s+(.*?)\s+1.?×(\d+)\s+g\s+\w+\s+([\d,]+)\s+\d+\s?%$', re.MULTILINE)
matches = pattern.findall(raw_data)

# Convert to structured JSON
products = [
    {
        "code": code,
        "name": name,
        "weightInGrams": int(weight),
        "maxPrice": float(price.replace(',', '.'))
    }
    for code, name, weight, price in matches
]

# Output JSON
print(products)  # showing sample of first 5 entries to verify
