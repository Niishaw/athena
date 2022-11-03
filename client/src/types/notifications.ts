export enum eNotificationIcon {
	Default = "Notifications",
	Important = "NotificationImportant",
	Silent = "NotificationsOff"
}

export enum eNotificationVariant {
	Default = "default",
	Success = "success",
	Error = "error",
	Warning = "warning",
	Info = "info",
}
export interface iNotification  {
	message: string,
	key: string,
	variant: eNotificationVariant
}