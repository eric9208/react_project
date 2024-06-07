class ActivitiesController < ApplicationController
    before_action :authenticate_user!
    
 

    def index
       
        @activity = Activity.find_by_user_id(@current_user)
        @sleeps = Sleep.where(activity_id: @activity).order(created_at: :desc)
        @diapers = Diaper.where(activity_id: @activity).order(created_at: :desc)
        @formulas = Formula.where(activity_id: @activity).order(created_at: :desc)
        @combine = @sleeps + @diapers + @formulas
        @final = @combine.sort {|a, b| b[:created_at] <=> a[:created_at]}
        
    end

    # def new
    #     @activity = Activity.new
    # end

    def create
        @activity = Activity.new
        @activity.user = @current_user
        if @activity.save
            flash[:success] = "Activity successfully created"
            redirect_to root_path
        end
    end
end
