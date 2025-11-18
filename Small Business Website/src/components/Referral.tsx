import { Gift, Users, Copy, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { useReferral } from "../contexts/ReferralContext";
import { toast } from "sonner@2.0.3";
import { Progress } from "./ui/progress";

export function Referral() {
  const { referrals, addReferral, markAsActive, cashbackPercentage, referralCode } = useReferral();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const activeCount = referrals.filter(ref => ref.status === "active").length;
  const pendingCount = referrals.filter(ref => ref.status === "pending").length;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    toast.success("Referral code copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addReferral(formData.name, formData.email);
    toast.success("Referral invitation sent!");
    setFormData({ name: "", email: "" });
  };

  const progressToNext = activeCount >= 3 ? 100 : activeCount >= 1 ? (activeCount / 3) * 100 : 0;

  return (
    <section id="referral" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[rgba(var(--primary-rgb),0.05)] to-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="tracking-widest text-[var(--primary-color)] mb-4 text-3xl md:text-4xl">
            REFERRAL REWARDS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Invite friends and earn cashback on your purchases
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 mb-1">Current Cashback</p>
                  <p className="text-[var(--primary-color)]">{cashbackPercentage}%</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--primary-rgb),0.2)] flex items-center justify-center">
                  <Gift className="w-6 h-6 text-[var(--primary-color)]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 mb-1">Active Friends</p>
                  <p className="text-[var(--primary-color)]">{activeCount}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--primary-rgb),0.2)] flex items-center justify-center">
                  <Users className="w-6 h-6 text-[var(--primary-color)]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 mb-1">Pending</p>
                  <p className="text-[var(--primary-color)]">{pendingCount}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--primary-rgb),0.2)] flex items-center justify-center">
                  <Users className="w-6 h-6 text-gray-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Your Referral Code</CardTitle>
                <CardDescription className="text-gray-400">
                  Share this code with your friends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input
                    value={referralCode}
                    readOnly
                    className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white font-mono"
                  />
                  <Button
                    onClick={handleCopy}
                    className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/80 text-white"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Cashback Tiers</CardTitle>
                <CardDescription className="text-gray-400">
                  Progress to the next tier
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">1 Active Friend</span>
                    <span className="text-[var(--primary-color)]">20% Cashback</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">3 Active Friends</span>
                    <span className="text-[var(--primary-color)]">35% Cashback</span>
                  </div>
                  <Progress 
                    value={progressToNext} 
                    className="h-2 bg-gray-800"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    {activeCount < 1 && "Invite 1 friend to unlock 20% cashback"}
                    {activeCount >= 1 && activeCount < 3 && `${3 - activeCount} more friend${3 - activeCount > 1 ? 's' : ''} to unlock 35% cashback`}
                    {activeCount >= 3 && "Maximum cashback unlocked!"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Invite a Friend</CardTitle>
              <CardDescription className="text-gray-400">
                Send an invitation to earn cashback rewards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <Input
                  placeholder="Friend's Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white placeholder:text-gray-500"
                />
                <Input
                  type="email"
                  placeholder="Friend's Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white placeholder:text-gray-500"
                />
                <Button 
                  type="submit"
                  className="w-full bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/80 text-white"
                >
                  Send Invitation
                </Button>
              </form>

              {referrals.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-white">Your Referrals</h4>
                  <div className="max-h-60 overflow-y-auto space-y-2">
                    {referrals.map((referral) => (
                      <div
                        key={referral.id}
                        className="flex items-center justify-between p-3 rounded-lg bg-black/50 border border-[rgba(var(--primary-rgb),0.2)]"
                      >
                        <div className="flex-1">
                          <p className="text-white text-sm">{referral.name}</p>
                          <p className="text-gray-500 text-xs">{referral.email}</p>
                        </div>
                        {referral.status === "pending" ? (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => markAsActive(referral.id)}
                            className="border-[rgba(var(--primary-rgb),0.3)] text-[var(--primary-color)] hover:bg-[rgba(var(--primary-rgb),0.1)]"
                          >
                            Mark Active
                          </Button>
                        ) : (
                          <span className="text-[var(--primary-color)] text-xs bg-[rgba(var(--primary-rgb),0.2)] px-2 py-1 rounded">
                            Active
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}