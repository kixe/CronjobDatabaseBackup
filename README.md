CRONJOB DATABASE BACKUP
=======================

Auto backup of your database. Triggered periodically by a cycle interval or via user logout.  
Use 'Process Database Backup Module' to restore from backup or delete them.  
This module could slow down your processes since backups may take some time,  
depending on how much there is to backup.
This cronjob (hooks on *LazyCron*) is executed by a call to module: *ProcessPageView*.   

Each run is logged in *site/assets/logs/messages.txt*.

## Basic Settings
+ **Backup Trigger**  
Select a time interval for automated database backups or one of the options to force backup after a user (role) with 'trigger-db-backup' permission assigned has been logged in or logged out. Permission 'trigger-db-backup' will be added with module installation. You just need to assign it to certain roles. 
If you want to disable automated backups choose 'never'. No need to uninstall the module for this. (default: every 4 weeks) 
+ **Backup Name**  
Choose a name for the backup files. No older file will be overwritten. If left blank default setting is the name of the database (set in config) with a number suffix (counter) to make it unique. Name format syntax: # placeholder for db-name. Escape `date()` format with surrounding %. If filename exists a unique filename will be generated: [filename]-[n].sql. Allowed types: A-Z, a-z, 0-9, #, %, dash and underscore.  
+ **Backup Fileinfo**  
Define custom fileinfo string here. Format syntax: # placeholder for db-name. Escape date() format with surrounding %. Any `$user` property surrounded with curled brackets will be replaced by the corresponding value. If left blank default setting will be 'backup made by CronjobDatabaseBackup'.

## Automatic Cleanup Settings
 
+ **Maximum Number of Backups**  
Select how many backups you want to keep in the storage. Minimum 1, default and maximum 100 (defined in constant MAXFILES). Executed with each cron.    
+ **Remove backups older than**  
Will remove backups older than selected time interval with each cron. 
+ **File protection string**  
String in a backup file name or description to protect files from being deleted by the cronjob.

## Advanced Settings

+ **Storage Path**  
Path to custom storage directory. If left blank or path doesn't exist default pass will be used. You cannot use `ProcessDatabaseBackups` to edit backups stored under a custom path.
+ **Tables**  
By default, the backup contains all tables. If you only want to include specific tables, you can select them individually, including the option to only back up the table structure for some tables without saving the data.  
+ **Auto add newly created Fields**  
Option to automatically add newly created fields to an individual selection of tables.
+ **Burn backups now!**  
Select how many backups you want to keep in storage. Klick *SAVE* to execute.  

## Requirements
*LazyCron.module*  

Not a real requirement but *ProcessDatabaseBackups.module* is useful to restore the database from a file or to delete older backup files. Works only if default storage path is used.

## Thanks :-)
I took some nice code from *ProcessDatabaseBackups.module*.  Thanks to Ryan!  

## License
[GNU-GPLv3](http://www.gnu.org/licenses/gpl-3.0.html)  

## Author
kixe (Christoph Thelen)