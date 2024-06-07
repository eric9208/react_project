class Api::V1::ActivitiesController < Api::ApplicationController
    before_action :authenticate_user!
  


    def index
        
        activity = Activity.find_by_user_id(current_user)
        sleeps = Sleep.where(activity_id: activity).order(created_at: :desc)
        diapers = Diaper.where(activity_id: activity).order(created_at: :desc)
        formulas = Formula.where(activity_id: activity).order(created_at: :desc)
        combine = sleeps + diapers + formulas
        final = combine.sort {|a, b| b[:created_at] <=> a[:created_at]}
        # render(json: {name: "asd", id: "123", first: "first"})
        if activity
            render(json: final)
        else
            render(json: {no: "no"})
        end
      
    end

    # def new
    #     @activity = Activity.new
    # end

    def create
        activity = Activity.new
        activity.user = current_user
        activity.save!
        render json: { id: activity.id }
        
    end
end
