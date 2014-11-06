CRONJOB DATABASE BACKUP
=======================

Auto backup your database periodically. Set interval in settings.  
Use Process Database Backup Module to restore from backup or delete them.  
This module could slow down your processes since backups may take some time,  
depending on how much there is to backup.

This cronjob (hooks on *LazyCron*) is executed by a call to module: *ProcessPageView*.   
This cronjob runs only if current user has db-backup permission.  
Each run is logged in assets/logs/ messages.txt

## Settings
+ **Backup Cycle Time**  
Select a cycle time cronjob will be executed  
+ **Backup Name**  
Choose a name for the backup. If left blank default name is the name of the database with a number suffix.  
+ **Storage Path**  
Path to custom storage directory. If left blank or path doesn't exist default pass will be used.  
+ **Tables**  
By default, the export will include all tables. If you only want certain tables to be included, select them.   

## Require
*LazyCron.module*  
*ProcessDatabaseBackups.module*  

Not a real requirement but *ProcessDatabaseBackups.module* is useful to restore database from file or delete older backup files.  
I recommend to use both modules.

## Thanks
to Ryan. I took some nice code from *ProcessDatabaseBackups.module*.  

## License
[GNU-GPLv3](http://www.gnu.org/licenses/gpl-3.0.html)  

## Author
kixe (Christoph Thelen)  
