class Activity < ApplicationRecord
  belongs_to :user
  has_many :sleeps, dependent: :destroy
  has_many :diapers, dependent: :destroy
  has_many :formulas, dependent: :destroy
  
end
