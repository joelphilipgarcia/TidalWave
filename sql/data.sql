use processmash;

INSERT INTO NETWORK_TYPE ( NETWORK_TYPE_ID, NAME) VALUES(1,'Social Network');
INSERT INTO NETWORK_TYPE ( NETWORK_TYPE_ID, NAME) VALUES(2,'Email');
INSERT INTO NETWORK_TYPE ( NETWORK_TYPE_ID, NAME) VALUES(3,'Instant Message');

INSERT INTO NETWORK ( NETWORK_ID, NETWORK_TYPE_ID, NAME, OAUTH_ENABLED) VALUES(1,1,'Facebook',1);
INSERT INTO NETWORK ( NETWORK_ID, NETWORK_TYPE_ID, NAME, OAUTH_ENABLED) VALUES(2,1,'Twitter',1);
INSERT INTO NETWORK ( NETWORK_ID, NETWORK_TYPE_ID, NAME, OAUTH_ENABLED) VALUES(3,1,'LinkedIn',1);

INSERT INTO APPLICATION_TYPE ( APPLICATION_TYPE_ID, NAME) VALUES(1,'Facebook Web');
INSERT INTO APPLICATION_TYPE ( APPLICATION_TYPE_ID, NAME) VALUES(2,'Facebook Tab');
INSERT INTO APPLICATION_TYPE ( APPLICATION_TYPE_ID, NAME) VALUES(3,'Mobile');
INSERT INTO APPLICATION_TYPE ( APPLICATION_TYPE_ID, NAME) VALUES(4,'LinkedIn Plugin');
INSERT INTO APPLICATION_TYPE ( APPLICATION_TYPE_ID, NAME) VALUES(5,'Twitter');

INSERT INTO START_EVENT_TYPE( START_EVENT_TYPE_ID, NAME) VALUES(1,'MANUAL');
INSERT INTO START_EVENT_TYPE( START_EVENT_TYPE_ID, NAME) VALUES(2,'FORM');
INSERT INTO START_EVENT_TYPE( START_EVENT_TYPE_ID, NAME) VALUES(3,'EMAIL');

INSERT INTO APPLICATION ( APPLICATION_ID, APPLICATION_TYPE_ID, NAME,  NATIVE_APP_NAME, NATIVE_APP_ID) 
    VALUES(1,1,'AcmeCorp','acmecorp','218438754848165' );
INSERT INTO APPLICATION ( APPLICATION_ID, APPLICATION_TYPE_ID, NAME,  NATIVE_APP_NAME, NATIVE_APP_ID) 
    VALUES(2,1,'Empowhr','empowhr','302131790330' );
INSERT INTO APPLICATION ( APPLICATION_ID, APPLICATION_TYPE_ID, NAME,  NATIVE_APP_NAME, NATIVE_APP_ID) 
    VALUES(3,1,'USAirways','usairway', '222447924449851');
INSERT INTO APPLICATION ( APPLICATION_ID, APPLICATION_TYPE_ID, NAME,  NATIVE_APP_NAME, NATIVE_APP_ID) 
    VALUES(4,1,'ABLSoft','ablsoft', '202545366449811');
INSERT INTO APPLICATION ( APPLICATION_ID, APPLICATION_TYPE_ID, NAME,  NATIVE_APP_NAME, NATIVE_APP_ID) 
    VALUES(5,1,'MyLanguage','mylanguagesupport', '132096410201084');
INSERT INTO APPLICATION ( APPLICATION_ID, APPLICATION_TYPE_ID, NAME,  NATIVE_APP_NAME, NATIVE_APP_ID) 
    VALUES(6,2,'Customer Service','pmsupport','121326211283976' );
INSERT INTO APPLICATION ( APPLICATION_ID, APPLICATION_TYPE_ID, NAME,  NATIVE_APP_NAME, NATIVE_APP_ID) 
    VALUES(7,2,'Feedback','pmfeedback','192040187509195' );
INSERT INTO APPLICATION ( APPLICATION_ID, APPLICATION_TYPE_ID, NAME,  NATIVE_APP_NAME, NATIVE_APP_ID) 
    VALUES(8,2,'Promotions','pmpromotions','109463885811247' );
INSERT INTO APPLICATION ( APPLICATION_ID, APPLICATION_TYPE_ID, NAME,  NATIVE_APP_NAME, NATIVE_APP_ID) 
    VALUES(9,2,'Coupons','pmcoupons','136517016425767' );    
INSERT INTO APPLICATION ( APPLICATION_ID, APPLICATION_TYPE_ID, NAME,  NATIVE_APP_NAME, NATIVE_APP_ID) 
    VALUES(10,2,'HelpDesk','pmhelpdesk','232147673484289' );     
INSERT INTO APPLICATION ( APPLICATION_ID, APPLICATION_TYPE_ID, NAME,  NATIVE_APP_NAME, NATIVE_APP_ID) 
    VALUES(11,1,'ProcessMash','processmash','132252616851904');
INSERT INTO APPLICATION ( APPLICATION_ID, APPLICATION_TYPE_ID, NAME,  NATIVE_APP_NAME, NATIVE_APP_ID) 
    VALUES(12,2,'Custom','pmcustom','183480785051278' );         

INSERT INTO CONTEXT ( CONTEXT_ID, BF_CONTEXT_ID, NAME, DISPLAY_NAME, ENABLED) 
		 VALUES ( 1, 101, 'acmecorp','Acme Corp', 1) ;
INSERT INTO CONTEXT ( CONTEXT_ID, BF_CONTEXT_ID, NAME, DISPLAY_NAME, ENABLED) 
		 VALUES ( 2, 9, 'empowhr','Empowhr', 1) ;
INSERT INTO CONTEXT ( CONTEXT_ID, BF_CONTEXT_ID, NAME, DISPLAY_NAME, ENABLED) 
		 VALUES ( 3, 3, 'usairway', 'USAirways',1) ;
INSERT INTO CONTEXT ( CONTEXT_ID, BF_CONTEXT_ID, NAME, DISPLAY_NAME, ENABLED) 
		 VALUES ( 4, 103, 'ablsoft', 'ABLSoft',1) ;
INSERT INTO CONTEXT ( CONTEXT_ID, BF_CONTEXT_ID, NAME, DISPLAY_NAME, ENABLED) 
		 VALUES ( 5, 104, 'mylanguagesupport','MyLanguage', 1 ) ;
INSERT INTO CONTEXT ( CONTEXT_ID, BF_CONTEXT_ID, NAME, DISPLAY_NAME, ENABLED) 
		 VALUES ( 6, 2, 'processmash','ProcessMash', 1 ) ;

INSERT INTO APPLICATION_CONTEXT ( APPLICATION_CONTEXT_ID, APPLICATION_ID, CONTEXT_ID, NAME, FIRST_TAB_DISPLAY_NAME, START_ACTION_DISPLAY_NAME, HEADER_IMAGE, NATIVE_PAGE_NAME, NATIVE_PAGE_LINK ) 
    VALUES(1,1,1,'AcmeCorp', 'Active Processes', 'New Process','acmecorp_header_250x75.png', 'AcmeCorp', 'http://apps.facebook.com/acmecorp');
INSERT INTO APPLICATION_CONTEXT ( APPLICATION_CONTEXT_ID, APPLICATION_ID, CONTEXT_ID, NAME, FIRST_TAB_DISPLAY_NAME, START_ACTION_DISPLAY_NAME, HEADER_IMAGE, NATIVE_PAGE_NAME, NATIVE_PAGE_LINK) 
    VALUES(2,2,2,'Empowhr', 'Open Cases', 'New Case','empowhr_header_250x75.png', 'Empowhr', 'http://apps.facebook.com/empowhr');
INSERT INTO APPLICATION_CONTEXT ( APPLICATION_CONTEXT_ID, APPLICATION_ID, CONTEXT_ID, NAME, FIRST_TAB_DISPLAY_NAME, START_ACTION_DISPLAY_NAME, HEADER_IMAGE , NATIVE_PAGE_NAME, NATIVE_PAGE_LINK) 
    VALUES(3,3,3,'USAirways', 'Open Cases', 'New Case','usairway_header_250x75.png','USAirways', 'http://apps.facebook.com/usairway');
INSERT INTO APPLICATION_CONTEXT ( APPLICATION_CONTEXT_ID, APPLICATION_ID, CONTEXT_ID, NAME, FIRST_TAB_DISPLAY_NAME, START_ACTION_DISPLAY_NAME, HEADER_IMAGE, NATIVE_PAGE_NAME, NATIVE_PAGE_LINK)  
    VALUES(4,4,4,'ABLSoft', 'Open Cases', 'New Case','ablsoft_header_250x75.png','ABLSoft', 'http://apps.facebook.com/ablsoft');
INSERT INTO APPLICATION_CONTEXT ( APPLICATION_CONTEXT_ID, APPLICATION_ID, CONTEXT_ID, NAME, FIRST_TAB_DISPLAY_NAME, START_ACTION_DISPLAY_NAME, HEADER_IMAGE, NATIVE_PAGE_NAME, NATIVE_PAGE_LINK)  
    VALUES(5,5,5,'MyLanguage', 'Open Cases', 'New Case','mylanguagesupport_header_250x75.png', 'MyLanguageSupport', 'http://apps.facebook.com/mylanguagesupport');
INSERT INTO APPLICATION_CONTEXT ( APPLICATION_CONTEXT_ID, APPLICATION_ID, CONTEXT_ID, NAME, FIRST_TAB_DISPLAY_NAME, START_ACTION_DISPLAY_NAME, NATIVE_PAGE_ID, HEADER_IMAGE, NATIVE_PAGE_NAME, NATIVE_PAGE_LINK)  
    VALUES(6,6,1,'Customer Service', 'Open Issues', 'New Issue','218438754848165','pmsupport_header_250x75.png','AcmeCorp','http://www.facebook.com/apps/application.php?id=218438754848165&sk=app_121326211283976' );
INSERT INTO APPLICATION_CONTEXT ( APPLICATION_CONTEXT_ID, APPLICATION_ID, CONTEXT_ID, NAME, FIRST_TAB_DISPLAY_NAME, START_ACTION_DISPLAY_NAME, NATIVE_PAGE_ID, HEADER_IMAGE, NATIVE_PAGE_NAME, NATIVE_PAGE_LINK)  
    VALUES(7,7,1,'Feedback', 'Feedback', 'New Feedback','218438754848165','pmfeedback_header_250x75.png','AcmeCorp','http://www.facebook.com/apps/application.php?id=218438754848165&sk=app_192040187509195' );
INSERT INTO APPLICATION_CONTEXT ( APPLICATION_CONTEXT_ID, APPLICATION_ID, CONTEXT_ID, NAME, FIRST_TAB_DISPLAY_NAME, START_ACTION_DISPLAY_NAME, HEADER_IMAGE, NATIVE_PAGE_NAME, NATIVE_PAGE_LINK)  
    VALUES(8,6,3,'Customer Service', 'Open Cases', 'New Case','pmsupport_header_250x75.png','USAirways','http://www.facebook.com/apps/application.php?id=222447924449851&sk=app_121326211283976');
INSERT INTO APPLICATION_CONTEXT ( APPLICATION_CONTEXT_ID, APPLICATION_ID, CONTEXT_ID, NAME, FIRST_TAB_DISPLAY_NAME, START_ACTION_DISPLAY_NAME, NATIVE_PAGE_ID, HEADER_IMAGE, NATIVE_PAGE_NAME, NATIVE_PAGE_LINK)  
    VALUES(9,8,1,'Promotions', 'Promotions', 'Promotion','218438754848165','pmpromotions_header_250x75.png','AcmeCorp', 'http://www.facebook.com/apps/application.php?id=218438754848165&sk=app_109463885811247' );
INSERT INTO APPLICATION_CONTEXT ( APPLICATION_CONTEXT_ID, APPLICATION_ID, CONTEXT_ID, NAME, FIRST_TAB_DISPLAY_NAME, START_ACTION_DISPLAY_NAME, NATIVE_PAGE_ID, HEADER_IMAGE, NATIVE_PAGE_NAME, NATIVE_PAGE_LINK)  
    VALUES(10,9,1,'Coupons', 'Existing Coupons', 'New Coupons','218438754848165','pmcoupons_header_250x75.png', 'AcmeCorp','http://www.facebook.com/apps/application.php?id=218438754848165&sk=app_136517016425767' );
INSERT INTO APPLICATION_CONTEXT ( APPLICATION_CONTEXT_ID, APPLICATION_ID, CONTEXT_ID, NAME, FIRST_TAB_DISPLAY_NAME, START_ACTION_DISPLAY_NAME, HEADER_IMAGE, NATIVE_PAGE_NAME, NATIVE_PAGE_LINK)  
    VALUES(11,10,1,'Help Desk', 'Open Tickets', 'New Tickets','pmhelpdesk_header_250x75.png', 'AcmeCorp','http://www.facebook.com/apps/application.php?id=218438754848165&sk=app_232147673484289');
INSERT INTO APPLICATION_CONTEXT ( APPLICATION_CONTEXT_ID, APPLICATION_ID, CONTEXT_ID, NAME, FIRST_TAB_DISPLAY_NAME, START_ACTION_DISPLAY_NAME, HEADER_IMAGE, NATIVE_PAGE_NAME, NATIVE_PAGE_LINK) 
    VALUES(12,11,6,'ProcessMash', 'Open Cases', 'New Case','processmash_header_250x75.png','ProcessMash','http://apps.facebook.com/processmash');   
INSERT INTO APPLICATION_CONTEXT ( APPLICATION_CONTEXT_ID, APPLICATION_ID, CONTEXT_ID, NAME, FIRST_TAB_DISPLAY_NAME, START_ACTION_DISPLAY_NAME, NATIVE_PAGE_NAME, NATIVE_PAGE_LINK) 
    VALUES(13,12,1,'Custom', 'Open Custom Processes', 'New Custom Processes','AcmeCorp','http://www.facebook.com/apps/application.php?id=218438754848165&sk=app_183480785051278');    
    
    
INSERT INTO PROCESS( PROCESS_ID, NAME, THUMBNAIL_IMAGE, START_EVENT_TYPE_ID )
    VALUES(1, 'Feedback', 'Hint.png', 2);
INSERT INTO PROCESS( PROCESS_ID, NAME, THUMBNAIL_IMAGE, START_EVENT_TYPE_ID  )
    VALUES(2, 'Technical Support', 'People.png', 2);
INSERT INTO PROCESS( PROCESS_ID, NAME, THUMBNAIL_IMAGE, START_EVENT_TYPE_ID  )
    VALUES(3, 'Coupons', 'Dollar.png', 2);
INSERT INTO PROCESS( PROCESS_ID, NAME, THUMBNAIL_IMAGE, START_EVENT_TYPE_ID  )
    VALUES(4, 'Promotions', 'Bank_account.png', 2);
INSERT INTO PROCESS( PROCESS_ID, NAME, THUMBNAIL_IMAGE, START_EVENT_TYPE_ID  )
    VALUES(5, 'Find your baggage', 'Case.png', 1);
INSERT INTO PROCESS( PROCESS_ID, NAME, THUMBNAIL_IMAGE, START_EVENT_TYPE_ID  )
    VALUES(6, 'Customer Service', 'People.png', 1);
INSERT INTO PROCESS( PROCESS_ID, NAME, THUMBNAIL_IMAGE, START_EVENT_TYPE_ID  )
    VALUES(7, 'Punch List', 'People.png', 1);
INSERT INTO PROCESS( PROCESS_ID, NAME, THUMBNAIL_IMAGE, START_EVENT_TYPE_ID  )
    VALUES(8, 'Help Desk', 'Admin.png', 2);    
INSERT INTO PROCESS( PROCESS_ID, NAME, THUMBNAIL_IMAGE, START_EVENT_TYPE_ID  )
    VALUES(9, 'Custom', 'icon_custom.png', 2);    

INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML) 
    VALUES(1,1,1,'Feedback', 'Hint.png', 20,'<div class="details">|Hey,|</br></br>|Thanks so much for providing the following Feedback to ProcessMash!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;Message&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');
INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(2,1,2,'Technical Support','People.png', 21,'<div class="details">|Hey,|</br></br>|Thanks so much for filing your Support Case!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;Description&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');
INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(3,1,3,'Coupons', 'Dollar.png', 22,'<div class="details">|Hey,|</br></br>|Thanks so much for signing up for Coupons!</br></br>Within the next 24 hours, you will receive your first coupon.</br></br>|You will be notified of your coupon via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');
    
INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(4,2,1,'Feedback', 'Hint.png', 14,'<div class="details">|Hey,|</br></br>|Thanks so much for providing the following Feedback to ProcessMash!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;Message&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>' );
INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML) 
    VALUES(5,2,2,'Support','People.png',15,'<div class="details">|Hey,|</br></br>|Thanks so much for filing your Support Case!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;Description&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');
INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML  ) 
    VALUES(6,2,3,'Coupons', 'Dollar.png', 16,'<div class="details">|Hey,|</br></br>|Thanks so much for signing up for Coupons!</br></br>Within the next 24 hours, you will receive your first coupon.</br></br>|You will be notified of your coupon via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');    

INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(7,3,1,'Feedback', 'Hint.png',11,'<div class="details">|Hey,|</br></br>|Thanks so much for providing the following Feedback to ProcessMash!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;Message&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');
INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(8,3,3,'Coupons', 'Dollar.png', 12,'<div class="details">|Hey,|</br></br>|Thanks so much for signing up for Coupons!</br></br>Within the next 24 hours, you will receive your first coupon.</br></br>|You will be notified of your coupon via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>' );
INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(9,3,5,'Find your baggage', 'Case.png', 28);
INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML) 
    VALUES(10,3,2,'Support','People.png',13,'<div class="details">|Hey,|</br></br>|Thanks so much for filing your Support Case!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;Description&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');
INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(11,3,4,'Promotions','Bank_account.png',41,'<div class="details">|Hey,|</br></br>|Thanks so much for creating your Campaign!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;CampaignPitch&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');
    

INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(12,4,1,'Feedback', 'Hint.png',17,'<div class="details">|Hey,|</br></br>|Thanks so much for providing the following Feedback to ProcessMash!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;Message&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');
INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(13,4,2,'Support','People.png',18,'<div class="details">|Hey,|</br></br>|Thanks so much for filing your Support Case!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;Description&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');
INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(14,4,3,'Coupons', 'Dollar.png',19,'<div class="details">|Hey,|</br></br>|Thanks so much for signing up for Coupons!</br></br>Within the next 24 hours, you will receive your first coupon.</br></br>|You will be notified of your coupon via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');

INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(15,5,1,'Feedback', 'Hint.png',7,'<div class="details">|Hey,|</br></br>|Thanks so much for providing the following Feedback to ProcessMash!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;Message&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');
INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(16,5,2,'Support','People.png',5,'<div class="details">|Hey,|</br></br>|Thanks so much for filing your Support Case!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;Description&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');
INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(17,5,3,'Coupons', 'Dollar.png',6,'<div class="details">|Hey,|</br></br>|Thanks so much for signing up for Coupons!</br></br>Within the next 24 hours, you will receive your first coupon.</br></br>|You will be notified of your coupon via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');

INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(18,6,2,'Customer Service','People.png',21,'<div class="details">|Hey,|</br></br>|Thanks so much for filing your Support Case!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;Description&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');

INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML) 
    VALUES(19,7,1,'Feedback', 'Hint.png', 20,'<div class="details">|Hey,|</br></br>|Thanks so much for providing the following Feedback to ProcessMash!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;Message&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');    

INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(20,8,2,'Customer Service','People.png',13,'<div class="details">|Hey,|</br></br>|Thanks so much for filing your Support Case!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;Description&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');    

INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(21,9,4,'Promotions', 'Bank_account.png', 20,'<div class="details">|Hey,|</br></br>|Thanks so much for creating your Campaign!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;CampaignPitch&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');    

INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(22,10,3,'Coupons','Dollar.png',13,'<div class="details">|Hey,|</br></br>|Thanks so much for signing up for Coupons!</br></br>Within the next 24 hours, you will receive your first coupon.</br></br>|You will be notified of your coupon via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');    

INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(23,11,8,'HelpDesk','Admin.png',13,'<div class="details">|Hey,|</br></br>|Thanks so much for filing your HelpDesk Ticket!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;LongDescription&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');   

INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML) 
    VALUES(24,3,8,'HelpDesk','Admin.png',63,'<div class="details">|Hey,|</br></br>|Thanks so much for filing your HelpDesk Ticket!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;LongDescription&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');

INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(25,12,8,'HelpDesk','Admin.png',1,'<div class="details">|Hey,|</br></br>|Thanks so much for filing your HelpDesk Ticket!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;LongDescription&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');          

INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(26,12,1,'Feedback','Hint.png',5,'<div class="details">|Hey,|</br></br>|Thanks so much for providing the following Feedback to ProcessMash!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;Message&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');        

INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(27,12,4,'Promotions','Bank_account.png',4,'<div class="details">|Hey,|</br></br>|Thanks so much for creating your Campaign!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;CampaignPitch&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');        

INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(28,12,3,'Coupons','Dollar.png',3,'<div class="details">|Hey,|</br></br>|Thanks so much for signing up for Coupons!</br></br>Within the next 24 hours, you will receive your first coupon.</br></br>|You will be notified of your coupon via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');        
    
INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID,PROCESS_STATUS_HTML ) 
    VALUES(29,12,2,'Support','People.png',2,'<div class="details">|Hey,|</br></br>|Thanks so much for filing your Support Case!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;Description&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');

INSERT INTO APPLICATION_CONTEXT_PROCESS ( APPLICATION_CONTEXT_PROCESS_ID, APPLICATION_CONTEXT_ID, PROCESS_ID, NAME, THUMBNAIL_IMAGE, BF_PROCESS_DESIGN_ID, PROCESS_STATUS_HTML ) 
    VALUES(30,13,9,'Custom','icon_custom.png',13,'<div class="details">|Hey,|</br></br>|Thanks so much for filing your HelpDesk Ticket!</br></br>|<tpl for=\".\">|<tpl for=\"properties\">|<tpl if=\"name == &quot;LongDescription&quot;\">|{label}: {value}<br>|</tpl>|</tpl>|</tpl>|</br>Within the next 24 hours, you will receive a response.</br></br>|You will be notified of your response via email and Facebook.|</br></br>|Thanks,|<br>|The ProcessMash Team|</div>');           
    
