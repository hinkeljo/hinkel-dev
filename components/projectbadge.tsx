import { Icon } from "@iconify/react";

export default function ProjectBadge({
  label,
  icon,
}: {
  label: string;
  icon?: string;
}) {
  return (
    <div className="badge badge-outline">
      {icon && <Icon icon={icon} className="w-4 h-4 mr-1" />}
      {label}
    </div>
  );
}
