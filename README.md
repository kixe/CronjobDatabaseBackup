CRONJOB DATABASE BACKUP
=======================

Auto backup your database periodically. Set the cycle interval in settings.  
Use 'Process Database Backup Module' to restore from backup or delete them.  
This module could slow down your processes since backups may take some time,  
depending on how much there is to backup.

This cronjob (hooks on *LazyCron*) is executed by a call to module: *ProcessPageView*.   
Runs only if current user has db-backup permission. Permission will be added with module installation. Assign the permission to the roles which should trigger the process.  

Each run is logged in *site/assets/logs/messages.txt*.

## Settings
+ **Backup Cycle Interval**  
Select a time interval between automated backups. If you don't want automated backups choose 'never'. No need to uninstall the module for this. (default: every 4 weeks)  
+ **Maximum Number of Backups**  
Select how many backups you want to keep in the storage. Minimum 1, default and maximum 100 (defined in constant MAXFILES). Eexecuted with each cron.    
+ **Remove backups older than**  
Will remove backups older than selected time interval with each cron. 
+ **Backup Name**  
Choose a name for the backup files. No older file will be overwritten. If left blank default setting is the name of the database (set in config) with a number suffix (counter) to make it unique. Name format syntax: # placeholder for db-name. Escape date() format with surrounding %. If filename exists a unique filename will be generated: [filename]-[n].sql. Allowed types: A-Z, a-z, 0-9, #, %, dash and underscore.  
+ **Storage Path**  
Path to custom storage directory. If left blank or path doesn't exist default pass will be used. (The Path is displayed under the field. Normally: /site/assets/backups/database/)  
+ **Tables**  
By default, the backup will include all tables. If you only want certain tables to be included, select them from the list.  
+ **Remove backups now**  
Select how many backups you want to keep in storage. Save to execute.  

## Require
*LazyCron.module*  

Not a real requirement but *ProcessDatabaseBackups.module* is useful to restore the database from a file or to delete older backup files.  
I recommend to use both modules.  

## Thanks :-)
I took some nice code from *ProcessDatabaseBackups.module*.  Thanks to Ryan!  

## License
[GNU-GPLv3](http://www.gnu.org/licenses/gpl-3.0.html)  

## Author
kixe (Christoph Thelen)