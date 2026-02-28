type WebsiteStatProps = {
  label: string;
  value: number;
};

export const WebsiteStat = ({ label, value }: WebsiteStatProps) => (
  <div className="stat-item">
    <span className="stat-label">{label}</span>
    <span className="stat-value">{value.toLocaleString()}</span>
  </div>
);
