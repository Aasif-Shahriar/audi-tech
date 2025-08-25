import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Stats Cards */}
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Products</div>
            <div className="stat-value">89</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Orders</div>
            <div className="stat-value">1,234</div>
            <div className="stat-desc">13% more than last month</div>
          </div>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Revenue</div>
            <div className="stat-value">$45,678</div>
            <div className="stat-desc">8% more than last month</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Recent Activity</h2>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-2 hover:bg-base-200 rounded"
                >
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-8">
                      <span className="text-xs">U</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">New order received</p>
                    <p className="text-sm text-gray-500">2 minutes ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="btn btn-primary">
                <Link href={"/dashboard/add-products"}>Add Product </Link>
              </button>
              <button className="btn btn-secondary">View Orders</button>
              <button className="btn btn-accent">Manage Users</button>
              <button className="btn btn-outline">Settings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
