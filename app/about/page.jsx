"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Our Company</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We are dedicated to providing high-quality products and exceptional
          customer service. Learn more about our mission, values, and the team
          behind our success.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="tabs tabs-boxed justify-center gap-2 mb-8">
        <button
          className={`tab ${
            activeTab === "mission" ? "tab-active text-purple-500" : ""
          }`}
          onClick={() => setActiveTab("mission")}
        >
          Our Mission
        </button>
        <button
          className={`tab ${
            activeTab === "story" ? "tab-active text-purple-500" : ""
          }`}
          onClick={() => setActiveTab("story")}
        >
          Our Story
        </button>
        <button
          className={`tab ${
            activeTab === "team" ? "tab-active text-purple-500" : ""
          }`}
          onClick={() => setActiveTab("team")}
        >
          Our Team
        </button>
        <button
          className={`tab ${
            activeTab === "values" ? "tab-active text-purple-500" : ""
          }`}
          onClick={() => setActiveTab("values")}
        >
          Our Values
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-base-100 rounded-box p-6 shadow-md">
        {activeTab === "mission" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-lg">
              Our mission is to provide innovative, high-quality products that
              enhance our customers' lives while maintaining a commitment to
              sustainability and ethical business practices.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Quality Products</h3>
                <p>
                  We carefully design and test all our products to ensure they
                  meet the highest standards.
                </p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">
                  Customer Satisfaction
                </h3>
                <p>
                  Your happiness is our priority. We strive to exceed
                  expectations with every interaction.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "story" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="text-lg">
              Founded in 2015, our company started as a small team of passionate
              individuals with a vision to revolutionize the industry. From our
              humble beginnings in a garage, we've grown into a trusted brand
              serving customers worldwide.
            </p>
            <div className="timeline mt-8">
              <div className="timeline-box timeline-start mb-8">
                <div className="timeline-time">2015</div>
                <div className="timeline-content">
                  <h3 className="font-bold">Company Founded</h3>
                  <p>Started with just 3 team members and a big dream</p>
                </div>
              </div>
              <div className="timeline-box timeline-end mb-8 timeline-primary">
                <div className="timeline-time">2022</div>
                <div className="timeline-content">
                  <h3 className="font-bold">First Major Product Launch</h3>
                  <p>Released our flagship product to critical acclaim</p>
                </div>
              </div>
              <div className="timeline-box timeline-start mb-8">
                <div className="timeline-time">2023</div>
                <div className="timeline-content">
                  <h3 className="font-bold">International Expansion</h3>
                  <p>Began serving customers in over 20 countries</p>
                </div>
              </div>
              <div className="timeline-box timeline-end timeline-primary">
                <div className="timeline-time">2025</div>
                <div className="timeline-content">
                  <h3 className="font-bold">Sustainability Initiative</h3>
                  <p>Committed to carbon-neutral operations</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "team" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Meet Our Team</h2>
            <p className="text-lg">
              Our diverse team of experts brings together decades of experience
              in product design, engineering, and customer service to deliver
              exceptional results.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="card bg-base-100 shadow-md">
                <div className="card-body items-center text-center">
                  <div className="avatar placeholder mb-4">
                    <div className="bg-primary text-white rounded-full w-24">
                      <Image
                        src="https://res.cloudinary.com/dnh9rdh01/image/upload/v1756118471/johnDoe-min_z37q7z.jpg"
                        width={50}
                        height={50}
                        alt="John Doe"
                      ></Image>
                    </div>
                  </div>
                  <h3 className="card-title">John Doe</h3>
                  <p className="text-gray-600">CEO & Founder</p>
                  <p className="text-sm">
                    Visionary leader with 15+ years of industry experience
                  </p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-md">
                <div className="card-body items-center text-center">
                  <div className="avatar placeholder mb-4">
                            <div className="bg-primary text-white rounded-full w-24">
                      <Image
                        src="https://res.cloudinary.com/dnh9rdh01/image/upload/v1756118471/janeSmith-min_b1da8o.jpg"
                        width={50}
                        height={50}
                        alt="John Doe"
                      ></Image>
                    </div>
                  </div>
                  <h3 className="card-title">Jane Smith</h3>
                  <p className="text-gray-600">Head of Product</p>
                  <p className="text-sm">
                    Product design expert with a passion for innovation
                  </p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-md">
                <div className="card-body items-center text-center">
                  <div className="avatar placeholder mb-4">
                           <div className="bg-primary text-white rounded-full w-24">
                      <Image
                        src="https://res.cloudinary.com/dnh9rdh01/image/upload/v1756118521/openart-image_1YrdmgJ9_1754663394314_raw_iikpj4.jpg"
                        width={50}
                        height={50}
                        alt="John Doe"
                      ></Image>
                    </div>
                  </div>
                  <h3 className="card-title">Robert Johnson</h3>
                  <p className="text-gray-600">CTO</p>
                  <p className="text-sm">
                    Tech visionary driving our technological advancement
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "values" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Our Values</h2>
            <p className="text-lg">
              These core values guide everything we do, from product development
              to customer interactions.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-base-200 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-primary p-2 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Integrity</h3>
                    <p className="mt-2">
                      We believe in honesty, transparency, and doing the right
                      thing even when no one is watching.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-base-200 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-secondary p-2 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Innovation</h3>
                    <p className="mt-2">
                      We constantly push boundaries and explore new ideas to
                      deliver cutting-edge solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-base-200 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-accent p-2 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Collaboration</h3>
                    <p className="mt-2">
                      We believe that the best results come from working
                      together and valuing diverse perspectives.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-base-200 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-primary p-2 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Customer Focus</h3>
                    <p className="mt-2">
                      Our customers are at the heart of everything we do. Their
                      satisfaction is our ultimate goal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Happy Customers</div>
            <div className="stat-value">50K+</div>
            <div className="stat-desc">Since 2015</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Products</div>
            <div className="stat-value">120+</div>
            <div className="stat-desc">In our catalog</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Team Members</div>
            <div className="stat-value">45</div>
            <div className="stat-desc">Across 5 countries</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Awards</div>
            <div className="stat-value">12</div>
            <div className="stat-desc">Industry recognition</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="hero bg-gradient-to-r from-purple-500 to-pink-500 rounded-box p-8 mb-8">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
            <p className="mb-6">
              We're always looking for talented individuals to join our team and
              help us shape the future.
            </p>
            <button className="btn bg-white text-purple-700 border-0 hover:bg-gray-100 hover:text-purple-800 px-8 py-3 text-lg font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
              View Open Positions →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
