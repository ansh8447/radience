PGDMP                           x        
   radiencedb    12.2    12.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16642 
   radiencedb    DATABASE     �   CREATE DATABASE radiencedb WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE radiencedb;
                postgres    false            v          0    16726 
   cb_details 
   TABLE DATA                 public          postgres    false    203   �       �          0    16793    economic_mode 
   TABLE DATA                 public          postgres    false    219   <       �          0    16777    event_details 
   TABLE DATA                 public          postgres    false    215   N       �          0    16769    expected_outage 
   TABLE DATA                 public          postgres    false    213   `       y          0    16741 
   gu_details 
   TABLE DATA                 public          postgres    false    206   r       z          0    16746    load_details 
   TABLE DATA                 public          postgres    false    207   <       �          0    16817    radience_dynamic_nodesGIS 
   TABLE DATA                 public          postgres    false    225   -#       �          0    16825    radience_dynamic_nodes_links 
   TABLE DATA                 public          postgres    false    227   X       �          0    16801    radience_static_nodesGIS 
   TABLE DATA                 public          postgres    false    221   "X       �          0    16809    radience_static_nodes_links 
   TABLE DATA                 public          postgres    false    223   �       |          0    16753    resiliency_scores 
   TABLE DATA                 public          postgres    false    209   /�       �          0    16785    resilient_mode 
   TABLE DATA                 public          postgres    false    217   A�       w          0    16731    subs_details 
   TABLE DATA                 public          postgres    false    204   S�       u          0    16721    system_info 
   TABLE DATA                 public          postgres    false    202   ��       ~          0    16761    threat_impacts 
   TABLE DATA                 public          postgres    false    211   u�       x          0    16736    trans_details 
   TABLE DATA                 public          postgres    false    205   ��       �           0    0    economic_mode_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.economic_mode_id_seq', 1, false);
          public          postgres    false    218            �           0    0    event_details_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.event_details_id_seq', 1, false);
          public          postgres    false    214            �           0    0    expected_outage_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.expected_outage_id_seq', 1, false);
          public          postgres    false    212            �           0    0     radience_dynamic_nodesGIS_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."radience_dynamic_nodesGIS_id_seq"', 1, false);
          public          postgres    false    224            �           0    0 #   radience_dynamic_nodes_links_id_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('public.radience_dynamic_nodes_links_id_seq', 1, false);
          public          postgres    false    226            �           0    0    radience_static_nodesGIS_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public."radience_static_nodesGIS_id_seq"', 1, false);
          public          postgres    false    220            �           0    0 "   radience_static_nodes_links_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public.radience_static_nodes_links_id_seq', 1, false);
          public          postgres    false    222            �           0    0    resiliency_scores_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.resiliency_scores_id_seq', 11, true);
          public          postgres    false    208            �           0    0    resilient_mode_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.resilient_mode_id_seq', 1, false);
          public          postgres    false    216            �           0    0    threat_impacts_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.threat_impacts_id_seq', 1, false);
          public          postgres    false    210            v   ?   INSERT INTO public.cb_details (cb_id, cb_loc, cb_status) VALUES     (    'CB1'    ,     'ORCA'    ,     '0'    )    ;
 ?   INSERT INTO public.cb_details (cb_id, cb_loc, cb_status) VALUES     (    'CB2'    ,     'EYAK'    ,     '1'    )    ;
 ?   INSERT INTO public.cb_details (cb_id, cb_loc, cb_status) VALUES     (    'CB3'    ,     'ORCA'    ,     '1'    )    ;
 ?   INSERT INTO public.cb_details (cb_id, cb_loc, cb_status) VALUES     (    'CB4'    ,     'EYAK'    ,     '0'    )    ;
 ?   INSERT INTO public.cb_details (cb_id, cb_loc, cb_status) VALUES     (    'CB5'    ,     'HBC'    ,     '1'    )    ;
    

      �      

      �      

      �      

      y   g   INSERT INTO public.gu_details (g_id, g_kv, g_unit_id, g_status, g_ctrl, g_mw_measured, g_rating) VALUES     (    'DG1'    ,     '4.16'    ,     'G3_ORC'    ,     '0'    ,     'AGC'    ,     '1.5'    ,     '220'    )    ;
 g   INSERT INTO public.gu_details (g_id, g_kv, g_unit_id, g_status, g_ctrl, g_mw_measured, g_rating) VALUES     (    'DG2'    ,     '0.5'    ,     'G4_ORC'    ,     '1'    ,     'AGC'    ,     '2.5'    ,     '220'    )    ;
 g   INSERT INTO public.gu_details (g_id, g_kv, g_unit_id, g_status, g_ctrl, g_mw_measured, g_rating) VALUES     (    'DG3'    ,     '0.8'    ,     'G5_ORC'    ,     '1'    ,     'AGC'    ,     '3.5'    ,     '330'    )    ;
 g   INSERT INTO public.gu_details (g_id, g_kv, g_unit_id, g_status, g_ctrl, g_mw_measured, g_rating) VALUES     (    'DG4'    ,     '1.54'    ,     'G3_ORC'    ,     '0'    ,     'AGC'    ,     '4.5'    ,     '220'    )    ;
 g   INSERT INTO public.gu_details (g_id, g_kv, g_unit_id, g_status, g_ctrl, g_mw_measured, g_rating) VALUES     (    'DG5'    ,     '3.22'    ,     'G4_ORC'    ,     '0'    ,     'AGC'    ,     '5.5'    ,     '330'    )    ;
    

      z   p   INSERT INTO public.load_details (l_id, l_kv, l_unit_id, l_status, l_type, l_mw_measured, l_mvar_measured) VALUES     (    'L01'    ,     '12'    ,  	   'L01_LAK'    ,     '1'    ,     'CL'    ,     '0.1'    ,     '0.01'    )    ;
 p   INSERT INTO public.load_details (l_id, l_kv, l_unit_id, l_status, l_type, l_mw_measured, l_mvar_measured) VALUES     (    'L02'    ,     '30'    ,  	   'L02_LAK'    ,     '1'    ,     'NCL'    ,     '0.2'    ,     '0.02'    )    ;
 p   INSERT INTO public.load_details (l_id, l_kv, l_unit_id, l_status, l_type, l_mw_measured, l_mvar_measured) VALUES     (    'L03'    ,     '40'    ,  	   'L03_LAK'    ,     '1'    ,     'CL'    ,     '0.3'    ,     '0.03'    )    ;
 p   INSERT INTO public.load_details (l_id, l_kv, l_unit_id, l_status, l_type, l_mw_measured, l_mvar_measured) VALUES     (    'L04'    ,     '15'    ,  	   'L04_LAK'    ,     '1'    ,     'NCL'    ,     '0.4'    ,     '0.04'    )    ;
 p   INSERT INTO public.load_details (l_id, l_kv, l_unit_id, l_status, l_type, l_mw_measured, l_mvar_measured) VALUES     (    'L05'    ,     '20'    ,  	   'L05_LAK'    ,     '1'    ,     'NCL'    ,     '0.5'    ,     '0.05'    )    ;
 p   INSERT INTO public.load_details (l_id, l_kv, l_unit_id, l_status, l_type, l_mw_measured, l_mvar_measured) VALUES     (    'L06'    ,     '30'    ,  	   'L06_LAK'    ,     '1'    ,     'CL'    ,     '0.6'    ,     '0.06'    )    ;
    

      �   r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    1    ,     '60.585037'    ,     '-145.626264'    ,     'G'    ,  ,   'N100 (Power Creek Substation - H5, H6, H7)'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    2    ,     '60.586285'    ,     '-145.623469'    ,     'N'    ,     'N101'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    3    ,  
   '60.58628'    ,     '-145.623362'    ,     'N'    ,     'N102'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    4    ,     '60.583697'    ,     '-145.630038'    ,     'N'    ,     'N103'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    5    ,     '60.614739'    ,     '-145.628432'    ,     'G'    ,  -   'N200 (Humpback Substation - H1, H2, H3, H4)'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    6    ,     '60.616122'    ,     '-145.630223'    ,     'N'    ,     'N201'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    7    ,     '60.616465'    ,     '-145.629995'    ,     'N'    ,     'N202'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    8    ,     '60.616483'    ,     '-145.627432'    ,     'N'    ,     'N203'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    9    ,     '60.610081'    ,     '-145.632727'    ,     'N'    ,     'N204'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    10    ,     '60.597869'    ,     '-145.663727'    ,     'N'    ,     'N205'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    11    ,     '60.556121'    ,     '-145.753738'    ,     'G'    ,  1   'N300 (Orca Substation - G3, G4, G5, G6, G7, G8)'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    12    ,  
   '60.54054'    ,     '-145.740904'    ,     'N'    ,     'N400'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    13    ,  
   '60.55604'    ,     '-145.7538'    ,     'N'    ,     'N507'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    14    ,  
   '60.55604'    ,     '-145.7538'    ,     'N'    ,     'N507'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    15    ,  
   '60.54728'    ,     '-145.763625'    ,     'N'    ,     'N514'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    16    ,  
   '60.54728'    ,     '-145.763625'    ,     'N'    ,     'N514'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    17    ,  
   '60.54875'    ,     '-145.763994'    ,     'N'    ,     'N518'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    18    ,  
   '60.54875'    ,     '-145.763994'    ,     'N'    ,     'N518'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    19    ,     '60.550438'    ,     '-145.760331'    ,     'N'    ,     'N526'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    20    ,     '60.550438'    ,     '-145.760331'    ,     'N'    ,     'N526'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    21    ,  	   '60.5405'    ,     '-145.741037'    ,     'N'    ,     'N606'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    22    ,  	   '60.5405'    ,     '-145.741037'    ,     'N'    ,     'N606'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    23    ,  
   '60.54319'    ,     '-145.74179'    ,     'N'    ,     'N608'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    24    ,  
   '60.54319'    ,     '-145.74179'    ,     'N'    ,     'N608'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    25    ,  
   '60.54319'    ,     '-145.74179'    ,     'N'    ,     'N612'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    26    ,  
   '60.54319'    ,     '-145.74179'    ,     'N'    ,     'N612'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    27    ,     '60.542419'    ,     '-145.752657'    ,     'N'    ,     'N614'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    28    ,     '60.542419'    ,     '-145.752657'    ,     'N'    ,     'N614'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    29    ,     '60.543419'    ,     '-145.752657'    ,     'N'    ,     'N620'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    30    ,     '60.543419'    ,     '-145.752657'    ,     'N'    ,     'N620'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    31    ,     '60.544636'    ,     '-145.757055'    ,     'N'    ,     'N627'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    32    ,     '60.544636'    ,     '-145.757055'    ,     'N'    ,     'N627'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    33    ,     '60.540457'    ,     '-145.741037'    ,     'N'    ,     'N701'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    34    ,     '60.543756'    ,     '-145.760985'    ,     'N'    ,     'N707'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    35    ,     '60.546848'    ,     '-145.761041'    ,     'N'    ,     'N720'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    36    ,     '60.546848'    ,     '-145.761041'    ,     'N'    ,     'N722'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    37    ,     '60.547613'    ,     '-145.765318'    ,     'N'    ,     'N731'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    38    ,  	   '60.5405'    ,     '-145.741037'    ,     'N'    ,     'N801'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    39    ,     '60.539322'    ,     '-145.753094'    ,     'N'    ,     'N806'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    40    ,     '60.539322'    ,     '-145.753094'    ,     'N'    ,     'N808'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    41    ,     '60.539322'    ,     '-145.753094'    ,     'N'    ,     'N811'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    42    ,     '60.535159'    ,     '-145.773058'    ,     'N'    ,     'N813'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    43    ,     '60.532345'    ,     '-145.778623'    ,     'N'    ,     'N822'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    44    ,     '60.527345'    ,     '-145.781623'    ,     'N'    ,     'N829'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    45    ,     '60.524323'    ,     '-145.784216'    ,     'N'    ,     'N831'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    46    ,     '60.541412'    ,     '-145.757476'    ,     'N'    ,     'N838'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    47    ,     '60.546626'    ,     '-145.758652'    ,     'N'    ,     'N850'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    48    ,  	   '60.5405'    ,     '-145.741037'    ,     'N'    ,     'N901'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    49    ,     '60.539483'    ,     '-145.73447'    ,     'N'    ,     'N910'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    50    ,     '60.539483'    ,     '-145.73447'    ,     'N'    ,     'N911'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    51    ,     '60.538594'    ,     '-145.706188'    ,     'N'    ,     'N916'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    52    ,     '60.537257'    ,     '-145.659961'    ,     'N'    ,     'N920'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    53    ,     '60.535957'    ,     '-145.658961'    ,     'N'    ,     'N921'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    54    ,     '60.527245'    ,     '-145.627593'    ,     'N'    ,     'N931'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    55    ,     '60.531245'    ,     '-145.647593'    ,     'N'    ,     'N937'    ,     1    )    ;
 r   INSERT INTO public."radience_dynamic_nodesGIS" (id, node_lat, node_long, node_code, node_desc, node_status) VALUES     (    56    ,     '60.537332'    ,     '-145.666187'    ,     'N'    ,     'N941'    ,     1    )    ;
    

      �      

      �   d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    1    ,     '60.585037'    ,     '-145.626264'    ,     'G'    ,  ,   'N100 (Power Creek Substation - H5, H6, H7)'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    2    ,     '60.586285'    ,     '-145.623469'    ,     'N'    ,     'N101'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    3    ,  
   '60.58628'    ,     '-145.623362'    ,     'N'    ,     'N102'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    4    ,     '60.583697'    ,     '-145.630038'    ,     'N'    ,     'N103'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    5    ,     '60.614739'    ,     '-145.628432'    ,     'G'    ,  -   'N200 (Humpback Substation - H1, H2, H3, H4)'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    6    ,     '60.616122'    ,     '-145.630223'    ,     'N'    ,     'N201'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    7    ,     '60.616465'    ,     '-145.629995'    ,     'N'    ,     'N202'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    8    ,     '60.616483'    ,     '-145.627432'    ,     'N'    ,     'N203'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    9    ,     '60.610081'    ,     '-145.632727'    ,     'N'    ,     'N204'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    10    ,     '60.597869'    ,     '-145.663727'    ,     'N'    ,     'N205'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    11    ,     '60.556121'    ,     '-145.753738'    ,     'G'    ,  1   'N300 (Orca Substation - G3, G4, G5, G6, G7, G8)'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    12    ,  
   '60.54054'    ,     '-145.740904'    ,     'N'    ,     'N400'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    13    ,  
   '60.55604'    ,     '-145.7538'    ,     'N'    ,     'N507'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    14    ,  
   '60.55604'    ,     '-145.7538'    ,     'N'    ,     'N507'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    15    ,  
   '60.54728'    ,     '-145.763625'    ,     'N'    ,     'N514'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    16    ,  
   '60.54728'    ,     '-145.763625'    ,     'N'    ,     'N514'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    17    ,  
   '60.54875'    ,     '-145.763994'    ,     'N'    ,     'N518'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    18    ,  
   '60.54875'    ,     '-145.763994'    ,     'N'    ,     'N518'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    19    ,     '60.550438'    ,     '-145.760331'    ,     'N'    ,     'N526'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    20    ,     '60.550438'    ,     '-145.760331'    ,     'N'    ,     'N526'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    21    ,  	   '60.5405'    ,     '-145.741037'    ,     'N'    ,     'N606'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    22    ,  	   '60.5405'    ,     '-145.741037'    ,     'N'    ,     'N606'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    23    ,  
   '60.54319'    ,     '-145.74179'    ,     'N'    ,     'N608'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    24    ,  
   '60.54319'    ,     '-145.74179'    ,     'N'    ,     'N608'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    25    ,  
   '60.54319'    ,     '-145.74179'    ,     'N'    ,     'N612'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    26    ,  
   '60.54319'    ,     '-145.74179'    ,     'N'    ,     'N612'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    27    ,     '60.542419'    ,     '-145.752657'    ,     'N'    ,     'N614'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    28    ,     '60.542419'    ,     '-145.752657'    ,     'N'    ,     'N614'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    29    ,     '60.543419'    ,     '-145.752657'    ,     'N'    ,     'N620'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    30    ,     '60.543419'    ,     '-145.752657'    ,     'N'    ,     'N620'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    31    ,     '60.544636'    ,     '-145.757055'    ,     'N'    ,     'N627'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    32    ,     '60.544636'    ,     '-145.757055'    ,     'N'    ,     'N627'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    33    ,     '60.540457'    ,     '-145.741037'    ,     'N'    ,     'N701'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    34    ,     '60.543756'    ,     '-145.760985'    ,     'N'    ,     'N707'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    35    ,     '60.546848'    ,     '-145.761041'    ,     'N'    ,     'N720'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    36    ,     '60.546848'    ,     '-145.761041'    ,     'N'    ,     'N722'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    37    ,     '60.547613'    ,     '-145.765318'    ,     'N'    ,     'N731'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    38    ,  	   '60.5405'    ,     '-145.741037'    ,     'N'    ,     'N801'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    39    ,     '60.539322'    ,     '-145.753094'    ,     'N'    ,     'N806'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    40    ,     '60.539322'    ,     '-145.753094'    ,     'N'    ,     'N808'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    41    ,     '60.539322'    ,     '-145.753094'    ,     'N'    ,     'N811'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    42    ,     '60.535159'    ,     '-145.773058'    ,     'N'    ,     'N813'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    43    ,     '60.532345'    ,     '-145.778623'    ,     'N'    ,     'N822'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    44    ,     '60.527345'    ,     '-145.781623'    ,     'N'    ,     'N829'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    45    ,     '60.524323'    ,     '-145.784216'    ,     'N'    ,     'N831'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    46    ,     '60.541412'    ,     '-145.757476'    ,     'N'    ,     'N838'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    47    ,     '60.546626'    ,     '-145.758652'    ,     'N'    ,     'N850'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    48    ,  	   '60.5405'    ,     '-145.741037'    ,     'N'    ,     'N901'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    49    ,     '60.539483'    ,     '-145.73447'    ,     'N'    ,     'N910'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    50    ,     '60.539483'    ,     '-145.73447'    ,     'N'    ,     'N911'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    51    ,     '60.538594'    ,     '-145.706188'    ,     'N'    ,     'N916'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    52    ,     '60.537257'    ,     '-145.659961'    ,     'N'    ,     'N920'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    53    ,     '60.535957'    ,     '-145.658961'    ,     'N'    ,     'N921'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    54    ,     '60.527245'    ,     '-145.627593'    ,     'N'    ,     'N931'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    55    ,     '60.531245'    ,     '-145.647593'    ,     'N'    ,     'N937'    )    ;
 d   INSERT INTO public."radience_static_nodesGIS" (id, node_lat, node_long, node_code, node_desc) VALUES     (    56    ,     '60.537332'    ,     '-145.666187'    ,     'N'    ,     'N941'    )    ;
    

      �      

      |      

      �      

      w   S   INSERT INTO public.subs_details (sub_id, sub_loc, sub_out_feed, sub_remarks) VALUES     (    'SUB1'    ,     'ORCA'    ,     'AUX Canery'    ,  	   'Working'    )    ;
 S   INSERT INTO public.subs_details (sub_id, sub_loc, sub_out_feed, sub_remarks) VALUES     (    'SUB2'    ,     'EYAK'    ,     'Main Town'    ,  	   'Working'    )    ;
 S   INSERT INTO public.subs_details (sub_id, sub_loc, sub_out_feed, sub_remarks) VALUES     (    'SUB3'    ,     'ORCA'    ,     'AUX Canery'    ,  	   'Working'    )    ;
 S   INSERT INTO public.subs_details (sub_id, sub_loc, sub_out_feed, sub_remarks) VALUES     (    'SUB4'    ,     'HBC'    ,     'Main Town'    ,  	   'Working'    )    ;
 S   INSERT INTO public.subs_details (sub_id, sub_loc, sub_out_feed, sub_remarks) VALUES     (    'SUB5'    ,     'EYAK'    ,     'AUX Canery'    ,  	   'Working'    )    ;
    

      u   C   INSERT INTO public.system_info (key_code, key_desc, key_val) VALUES     (    'POLE'    ,     'No. of poles'    ,     50    )    ;
 C   INSERT INTO public.system_info (key_code, key_desc, key_val) VALUES     (    'ISOL'    ,     'No. of isolators'    ,     20    )    ;
 C   INSERT INTO public.system_info (key_code, key_desc, key_val) VALUES     (    'SUBS'    ,     'No. of Substations'    ,     5    )    ;
 C   INSERT INTO public.system_info (key_code, key_desc, key_val) VALUES     (    'SMTR'    ,     'No. of Smart Meters'    ,     10    )    ;
 C   INSERT INTO public.system_info (key_code, key_desc, key_val) VALUES     (    'FDRS'    ,     'No. of Feeders'    ,     25    )    ;
 C   INSERT INTO public.system_info (key_code, key_desc, key_val) VALUES     (    'OLSW'    ,     'No. of Oil Switches'    ,     10    )    ;
    

      ~      

      x   _   INSERT INTO public.trans_details (trans_id, trans_rating, trans_loc, trans_op_condition) VALUES     (    'TRANS1'    ,     '200'    ,     'ORCA'    ,     '80'    )    ;
 _   INSERT INTO public.trans_details (trans_id, trans_rating, trans_loc, trans_op_condition) VALUES     (    'TRANS2'    ,     '50'    ,     'PCS'    ,     '30'    )    ;
 _   INSERT INTO public.trans_details (trans_id, trans_rating, trans_loc, trans_op_condition) VALUES     (    'TRANS3'    ,     '100'    ,     'HBC'    ,     '20'    )    ;
 _   INSERT INTO public.trans_details (trans_id, trans_rating, trans_loc, trans_op_condition) VALUES     (    'TRANS4'    ,     '300'    ,     'ORCA'    ,     '80'    )    ;
 _   INSERT INTO public.trans_details (trans_id, trans_rating, trans_loc, trans_op_condition) VALUES     (    'TRANS5'    ,     '100'    ,     'HBC'    ,     '20'    )    ;
    

     